<template>
  <v-card class="gearify-card gearify-card-interactive kpi-card pa-5 h-100">
    <!-- Subtle Accent Glow -->
    <div
      class="kpi-glow"
      :style="{ background: `radial-gradient(circle, ${metric.accentColor}26 0%, transparent 70%)` }"
    />

    <div class="d-flex align-start justify-space-between position-relative">
      <!-- Icon Badge -->
      <div
        class="kpi-icon-box d-flex align-center justify-center mr-4"
        :style="{
          backgroundColor: `${metric.accentColor}1A`,
          borderColor: `${metric.accentColor}45`,
        }"
      >
        <v-icon :icon="resolvedIcon" :color="metric.accentColor" size="24" />
      </div>

      <!-- Metric Info -->
      <div class="flex-grow-1">
        <div class="text-caption font-weight-semibold text-secondary-muted mb-1">
          {{ metric.title }}
        </div>
        <div class="kpi-value heading-bold mb-2">
          {{ metric.value }}
        </div>

        <div class="d-flex align-center justify-space-between">
          <div class="d-flex align-center">
            <v-icon
              :icon="metric.trend.startsWith('+') ? 'mdi-arrow-up' : 'mdi-arrow-down'"
              size="15"
              :color="metric.trendPositive ? 'success' : 'warning'"
              class="mr-1"
            />
            <span
              class="text-caption font-weight-bold mr-2"
              :style="{ color: metric.trendPositive ? '#27C58B' : '#F5B942' }"
            >
              {{ metric.trend }}
            </span>
            <span class="text-caption text-secondary-muted d-none d-xl-inline">
              {{ metric.period }}
            </span>
          </div>

          <!-- Mini SVG Sparkline -->
          <svg
            v-if="sparklinePath"
            width="68"
            height="24"
            viewBox="0 0 68 24"
            class="kpi-sparkline"
          >
            <path
              :d="sparklinePath"
              fill="none"
              :stroke="metric.accentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  metric: {
    type: Object,
    required: true,
  },
})

const resolvedIcon = computed(() => {
  return props.metric.iconFallback || props.metric.icon || 'mdi-chart-line'
})

const sparklinePath = computed(() => {
  const points = props.metric.sparkline
  if (!Array.isArray(points) || points.length < 2) return ''
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  const width = 64
  const height = 18

  return points
    .map((val, idx) => {
      const x = 2 + (idx / (points.length - 1)) * width
      const y = 21 - ((val - min) / range) * height
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
})
</script>

<style scoped>
.kpi-card {
  position: relative;
  overflow: hidden;
}

.kpi-glow {
  position: absolute;
  top: -28px;
  left: -28px;
  width: 120px;
  height: 120px;
  pointer-events: none;
}

.kpi-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid;
  flex-shrink: 0;
}

.kpi-value {
  font-size: 1.65rem;
  line-height: 1.15;
  color: #F4F5F8;
}

.kpi-sparkline {
  opacity: 0.85;
}
</style>
