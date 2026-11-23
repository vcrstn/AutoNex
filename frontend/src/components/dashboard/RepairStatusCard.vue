<template>
  <v-card class="gearify-card pa-5 h-100 d-flex flex-column justify-space-between">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-4">
      <div class="d-flex align-center">
        <v-avatar color="rgba(229, 57, 69, 0.14)" size="36" rounded="lg" class="mr-3">
          <v-icon icon="mdi-chart-donut" color="primary" size="20" />
        </v-avatar>
        <div>
          <h3 class="title-semibold text-subtitle-1 mb-0">
            Repair Status Overview
          </h3>
          <div class="text-caption text-secondary-muted">
            Distribution of {{ overview.totalOrders }} sample orders
          </div>
        </div>
      </div>

      <v-btn
        variant="text"
        size="small"
        color="secondary"
        to="/repair-orders"
        class="text-none font-weight-semibold"
        append-icon="mdi-arrow-right"
      >
        View All
      </v-btn>
    </div>

    <!-- Doughnut Chart + Legend Grid -->
    <v-row align="center" class="my-1">
      <v-col cols="12" sm="5" class="d-flex justify-center">
        <div class="donut-container position-relative">
          <Doughnut :data="chartData" :options="chartOptions" />
          <div class="donut-center-label d-flex flex-column align-center justify-center">
            <span class="heading-bold text-h5">{{ overview.primaryRate }}</span>
            <span class="text-caption text-secondary-muted">{{ overview.primaryLabel }}</span>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="7">
        <div
          v-for="item in overview.breakdown"
          :key="item.label"
          class="status-legend-row d-flex align-center justify-space-between py-2 px-3 mb-2 rounded-lg"
        >
          <div class="d-flex align-center">
            <span
              class="legend-dot mr-3"
              :style="{ backgroundColor: item.color }"
            />
            <div>
              <div class="text-body-2 font-weight-semibold text-white">
                {{ item.label }}
              </div>
              <div class="text-caption text-secondary-muted">
                {{ item.count }} orders
              </div>
            </div>
          </div>

          <v-chip
            size="small"
            variant="tonal"
            class="font-weight-bold"
            :style="{ color: item.color }"
          >
            {{ item.percentage }}%
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { mockRepairStatusOverview } from '@/services/mockDashboardData'

ChartJS.register(ArcElement, Tooltip)

const overview = mockRepairStatusOverview

const chartData = computed(() => ({
  labels: overview.breakdown.map((b) => b.label),
  datasets: [
    {
      data: overview.breakdown.map((b) => b.percentage),
      backgroundColor: overview.breakdown.map((b) => b.color),
      borderColor: '#292F3D',
      borderWidth: 4,
      hoverOffset: 4,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '72%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#202431',
      titleColor: '#F4F5F8',
      bodyColor: '#F4F5F8',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      callbacks: {
        label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%`,
      },
    },
  },
}
</script>

<style scoped>
.donut-container {
  width: 155px;
  height: 155px;
}

.donut-center-label {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.status-legend-row {
  background-color: #202431;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
