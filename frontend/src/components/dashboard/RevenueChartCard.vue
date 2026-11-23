<template>
  <v-card class="gearify-card pa-5 h-100 d-flex flex-column">
    <!-- Card Header & Time Range Switcher -->
    <div class="d-flex flex-wrap align-center justify-space-between ga-3 mb-4">
      <div class="d-flex align-center">
        <v-avatar color="rgba(229, 57, 69, 0.14)" size="36" rounded="lg" class="mr-3">
          <v-icon icon="mdi-chart-areaspline" color="primary" size="20" />
        </v-avatar>
        <div>
          <h3 class="title-semibold text-subtitle-1 mb-0">
            Monthly Revenue & Performance Overview
          </h3>
          <div class="text-caption text-secondary-muted">
            Sample shop revenue trajectory ({{ activeRange }} view)
          </div>
        </div>
      </div>

      <!-- Timeframe Selector Pills (1M, 3M, 6M, 1Y) -->
      <div class="d-flex align-center ga-1 range-pill-group pa-1 rounded-lg">
        <v-btn
          v-for="range in ranges"
          :key="range"
          size="x-small"
          :variant="activeRange === range ? 'flat' : 'text'"
          :color="activeRange === range ? 'primary' : 'on-surface-variant'"
          class="font-weight-bold px-3"
          height="28"
          @click="activeRange = range"
        >
          {{ range }}
        </v-btn>
      </div>
    </div>

    <!-- Highlight Summary Bar -->
    <div class="d-flex align-center justify-space-between px-4 py-2 mb-4 rounded-lg revenue-banner">
      <div class="d-flex align-center ga-2">
        <span class="text-caption text-secondary-muted">Latest Period ({{ currentSeries.highlightLabel }}):</span>
        <span class="font-weight-bold text-body-2 text-white">{{ currentSeries.highlightValue }}</span>
      </div>
      <v-chip size="x-small" color="success" variant="tonal" class="font-weight-bold">
        +14.2% Growth (Sample)
      </v-chip>
    </div>

    <!-- Chart.js Canvas Container -->
    <div class="chart-wrapper flex-grow-1">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { mockMonthlyRevenueByRange } from '@/services/mockDashboardData'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
)

const ranges = ['1M', '3M', '6M', '1Y']
const activeRange = ref('1M')

const currentSeries = computed(() => mockMonthlyRevenueByRange[activeRange.value])

const chartData = computed(() => ({
  labels: currentSeries.value.labels,
  datasets: [
    {
      label: 'Shop Revenue (₱)',
      data: currentSeries.value.values,
      borderColor: '#E53945',
      backgroundColor: (context) => {
        const chart = context.chart
        const { ctx, chartArea } = chart
        if (!chartArea) return 'rgba(229, 57, 69, 0.18)'
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
        gradient.addColorStop(0, 'rgba(229, 57, 69, 0.35)')
        gradient.addColorStop(1, 'rgba(229, 57, 69, 0.01)')
        return gradient
      },
      borderWidth: 3,
      pointBackgroundColor: '#FF626B',
      pointBorderColor: '#FFFFFF',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7,
      tension: 0.4,
      fill: true,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#202431',
      titleColor: '#F4F5F8',
      bodyColor: '#F4F5F8',
      borderColor: 'rgba(229, 57, 69, 0.45)',
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      callbacks: {
        label: (ctx) => `Revenue: ₱${Number(ctx.parsed.y).toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
        drawBorder: false,
      },
      ticks: {
        color: '#9299A8',
        font: {
          family: 'Inter',
          size: 12,
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
        drawBorder: false,
      },
      ticks: {
        color: '#9299A8',
        font: {
          family: 'Inter',
          size: 12,
        },
        callback: (value) => (value === 0 ? '0' : `${Math.round(value / 1000)}k`),
      },
    },
  },
}
</script>

<style scoped>
.range-pill-group {
  background-color: #202431;
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.revenue-banner {
  background-color: #202431;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.chart-wrapper {
  position: relative;
  min-height: 250px;
}
</style>
