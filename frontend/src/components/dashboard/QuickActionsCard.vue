<template>
  <v-card class="gearify-card pa-5 h-100 d-flex flex-column justify-space-between">
    <div>
      <!-- Header -->
      <div class="d-flex align-center mb-4">
        <v-avatar color="rgba(229, 57, 69, 0.14)" size="36" rounded="lg" class="mr-3">
          <v-icon icon="mdi-lightning-bolt" color="primary" size="20" />
        </v-avatar>
        <div>
          <h3 class="title-semibold text-subtitle-1 mb-0">
            Quick Actions
          </h3>
          <div class="text-caption text-secondary-muted">
            Common shop operations
          </div>
        </div>
      </div>

      <!-- Action Buttons Stack -->
      <div class="d-flex flex-column ga-3">
        <v-btn
          v-for="action in actions"
          :key="action.id"
          :to="action.to"
          :color="action.primary ? 'primary' : undefined"
          :variant="action.primary ? 'flat' : 'tonal'"
          height="46"
          block
          class="quick-action-btn justify-space-between text-none px-4"
          :class="{ 'quick-action-btn--secondary': !action.primary }"
        >
          <div class="d-flex align-center">
            <v-icon
              :icon="action.iconFallback || action.icon"
              size="19"
              class="mr-3"
              :color="action.primary ? 'white' : 'secondary'"
            />
            <span class="font-weight-semibold text-body-2">{{ action.label }}</span>
          </div>
          <v-icon icon="mdi-chevron-right" size="18" />
        </v-btn>
      </div>
    </div>

    <!-- Bottom Shop Bay Readiness Note -->
    <div class="bay-status-box mt-4 pa-3 rounded-lg d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <v-icon icon="mdi-garage-open-variant" color="success" size="20" class="mr-2" />
        <span class="text-caption font-weight-semibold text-secondary-muted">
          Service Bays Available
        </span>
      </div>
      <span class="text-caption font-weight-bold text-white">4 / 6 Active</span>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  actions: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.quick-action-btn {
  border-radius: 10px !important;
}

.quick-action-btn :deep(.v-btn__content) {
  width: 100%;
  justify-content: space-between;
}

.quick-action-btn--secondary {
  background-color: #202431 !important;
  border: 1px solid rgba(255, 255, 255, 0.07) !important;
  color: #F4F5F8 !important;
}

.quick-action-btn--secondary:hover {
  border-color: rgba(229, 57, 69, 0.4) !important;
}

.bay-status-box {
  background-color: #202431;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
</style>
