<template>
  <div class="dashboard-page">
    <!-- Automotive Hero Welcome Banner -->
    <v-card class="gearify-card hero-banner mb-6 pa-6">
      <div class="hero-accent-slash" />
      <v-row align="center">
        <v-col cols="12" md="8">
          <div class="d-flex flex-wrap align-center ga-2 mb-2">
            <v-chip
              size="small"
              color="primary"
              variant="flat"
              class="font-weight-bold"
            >
              GEARIFY OS
            </v-chip>
            <v-chip
              size="small"
              color="secondary"
              variant="tonal"
              prepend-icon="mdi-information-outline"
              class="font-weight-semibold"
            >
              {{ mockNotice }}
            </v-chip>
          </div>

          <h1 class="heading-bold text-h4 mb-1">
            Welcome back, Vict!
          </h1>
          <p class="text-body-1 text-secondary-muted mb-3">
            Keep your shop running smoothly. <span class="text-white font-weight-medium">"Drive Better. We'll Take Care of the Rest."</span>
          </p>
          <div class="hero-red-bar" />
        </v-col>

        <v-col cols="12" md="4" class="d-flex justify-md-end align-center">
          <div class="hero-status-panel pa-4 rounded-lg w-100">
            <div class="d-flex align-center justify-space-between mb-2">
              <span class="text-caption font-weight-bold text-secondary-muted">SYSTEM HEALTH</span>
              <v-chip
                size="x-small"
                :color="apiOnline ? 'success' : 'warning'"
                variant="flat"
                class="font-weight-bold"
              >
                {{ apiOnline ? 'LARAVEL API ONLINE' : 'MOCK PREVIEW MODE' }}
              </v-chip>
            </div>
            <div class="text-body-2 font-weight-semibold text-white mb-1">
              {{ apiInfo?.application || 'GEARIFY' }} REST Foundation
            </div>
            <div class="text-caption text-secondary-muted">
              DB Driver: <code class="text-white">{{ apiInfo?.database_driver || 'mysql (configured)' }}</code>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- 4 KPI Cards Row -->
    <v-row class="mb-4">
      <v-col
        v-for="metric in kpiMetrics"
        :key="metric.id"
        cols="12"
        sm="6"
        lg="3"
      >
        <KpiCard :metric="metric" />
      </v-col>
    </v-row>

    <!-- Monthly Revenue Chart + Quick Actions Row -->
    <v-row class="mb-4">
      <v-col cols="12" lg="8">
        <RevenueChartCard />
      </v-col>
      <v-col cols="12" lg="4">
        <QuickActionsCard :actions="quickActions" />
      </v-col>
    </v-row>

    <!-- Recent Activity + Repair Status Overview Row -->
    <v-row class="mb-4">
      <v-col cols="12" lg="6">
        <RecentActivityCard :activities="recentActivities" />
      </v-col>
      <v-col cols="12" lg="6">
        <RepairStatusCard />
      </v-col>
    </v-row>

    <!-- Recent Repair Orders Data Table -->
    <v-row>
      <v-col cols="12">
        <RecentRepairOrdersTable :orders="recentRepairOrders" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import KpiCard from '@/components/dashboard/KpiCard.vue'
import RevenueChartCard from '@/components/dashboard/RevenueChartCard.vue'
import RepairStatusCard from '@/components/dashboard/RepairStatusCard.vue'
import RecentRepairOrdersTable from '@/components/dashboard/RecentRepairOrdersTable.vue'
import RecentActivityCard from '@/components/dashboard/RecentActivityCard.vue'
import QuickActionsCard from '@/components/dashboard/QuickActionsCard.vue'
import {
  MOCK_DATA_NOTICE,
  mockKpiMetrics,
  mockRecentRepairOrders,
  mockRecentActivities,
  mockQuickActions,
} from '@/services/mockDashboardData'

defineProps({
  apiOnline: {
    type: Boolean,
    default: false,
  },
  apiInfo: {
    type: Object,
    default: null,
  },
})

const mockNotice = MOCK_DATA_NOTICE
const kpiMetrics = mockKpiMetrics
const recentRepairOrders = mockRecentRepairOrders
const recentActivities = mockRecentActivities
const quickActions = mockQuickActions
</script>

<style scoped>
.hero-banner {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #292F3D 0%, #202431 100%) !important;
}

.hero-accent-slash {
  position: absolute;
  top: -40px;
  right: 28%;
  width: 64px;
  height: 260px;
  background: linear-gradient(180deg, rgba(229, 57, 69, 0.25) 0%, rgba(229, 57, 69, 0.02) 100%);
  transform: rotate(22deg);
  pointer-events: none;
}

.hero-red-bar {
  width: 68px;
  height: 4px;
  border-radius: 2px;
  background-color: #E53945;
}

.hero-status-panel {
  background-color: rgba(21, 24, 33, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  max-width: 340px;
}
</style>
