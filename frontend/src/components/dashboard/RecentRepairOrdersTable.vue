<template>
  <v-card class="gearify-card pa-5">
    <!-- Table Header -->
    <div class="d-flex flex-wrap align-center justify-space-between ga-3 mb-4">
      <div class="d-flex align-center">
        <v-avatar color="rgba(229, 57, 69, 0.14)" size="36" rounded="lg" class="mr-3">
          <v-icon icon="mdi-clipboard-text-clock-outline" color="primary" size="20" />
        </v-avatar>
        <div>
          <h3 class="title-semibold text-subtitle-1 mb-0">
            Recent Repair Orders
          </h3>
          <div class="text-caption text-secondary-muted">
            Latest service bay job tickets (Sample Data)
          </div>
        </div>
      </div>

      <div class="d-flex align-center ga-2">
        <v-chip size="x-small" color="secondary" variant="tonal" class="font-weight-semibold">
          Mock Dataset
        </v-chip>
        <v-btn
          variant="tonal"
          color="primary"
          size="small"
          to="/repair-orders"
          class="text-none font-weight-semibold"
          append-icon="mdi-arrow-right"
        >
          Manage Orders
        </v-btn>
      </div>
    </div>

    <!-- Responsive Data Table -->
    <v-table class="gearify-data-table bg-transparent" hover>
      <thead>
        <tr>
          <th class="text-left">Order ID</th>
          <th class="text-left">Customer & Vehicle</th>
          <th class="text-left">Service / Scope</th>
          <th class="text-left">Technician</th>
          <th class="text-left">Status</th>
          <th class="text-right">Est. Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.orderId">
          <td>
            <span class="font-weight-bold text-white">{{ order.orderId }}</span>
            <div class="text-caption text-secondary-muted">{{ order.updatedAt }}</div>
          </td>
          <td>
            <div class="font-weight-semibold text-white">{{ order.customer }}</div>
            <div class="text-caption text-secondary-muted">
              {{ order.vehicle }} • <span class="plate-badge">{{ order.plateNumber }}</span>
            </div>
          </td>
          <td class="text-body-2">
            {{ order.service }}
          </td>
          <td>
            <div class="d-flex align-center">
              <v-avatar size="26" color="#202431" class="mr-2 text-caption font-weight-bold">
                {{ order.technician.charAt(0) }}
              </v-avatar>
              <span class="text-body-2">{{ order.technician }}</span>
            </div>
          </td>
          <td>
            <v-chip
              size="small"
              :color="statusColor(order.status)"
              variant="tonal"
              class="font-weight-bold"
            >
              {{ order.status }}
            </v-chip>
          </td>
          <td class="text-right font-weight-bold text-white">
            {{ order.amount }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
defineProps({
  orders: {
    type: Array,
    required: true,
  },
})

function statusColor(status) {
  switch (status) {
    case 'Completed':
      return 'success'
    case 'In Progress':
      return 'primary'
    case 'Awaiting Parts':
    case 'Pending':
      return 'warning'
    default:
      return 'info'
  }
}
</script>

<style scoped>
.gearify-data-table :deep(th) {
  color: #9299A8 !important;
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  background-color: rgba(32, 36, 49, 0.55) !important;
}

.gearify-data-table :deep(td) {
  padding-top: 14px !important;
  padding-bottom: 14px !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
}

.plate-badge {
  background-color: #202431;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 1px 6px;
  font-family: monospace;
  font-size: 0.72rem;
  color: #F4F5F8;
}
</style>
