<template>
  <div>
    <!-- Page Header -->
    <div class="d-flex flex-wrap align-center justify-space-between ga-3 mb-6">
      <div class="d-flex align-center">
        <v-avatar color="rgba(229, 57, 69, 0.15)" size="48" rounded="lg" class="mr-4">
          <v-icon :icon="icon" color="primary" size="26" />
        </v-avatar>
        <div>
          <div class="d-flex align-center ga-2">
            <h1 class="heading-bold text-h5 mb-0">{{ title }}</h1>
            <v-chip size="x-small" color="secondary" variant="tonal" class="font-weight-bold">
              Phase 1 Shell
            </v-chip>
          </div>
          <p class="text-body-2 text-secondary-muted mb-0">
            {{ subtitle }}
          </p>
        </div>
      </div>

      <v-btn
        color="primary"
        prepend-icon="mdi-arrow-left"
        to="/dashboard"
        class="text-none font-weight-semibold"
      >
        Back to Dashboard
      </v-btn>
    </div>

    <!-- Module Readiness Card -->
    <v-card class="gearify-card pa-8 text-center">
      <v-avatar color="rgba(229, 57, 69, 0.12)" size="72" class="mb-4">
        <v-icon :icon="icon" color="primary" size="36" />
      </v-avatar>

      <h2 class="title-semibold text-h6 mb-2">
        {{ title }} Module Foundation Ready
      </h2>
      <p class="text-body-2 text-secondary-muted mx-auto mb-6" style="max-width: 560px;">
        This route (<code class="text-white">{{ routePath }}</code>) is registered in the
        <strong>GEARIFY</strong> Vue Router configuration and ready for Phase 2 REST API integration
        and CRUD implementation.
      </p>

      <v-row justify="center" class="text-left">
        <v-col cols="12" md="8" lg="6">
          <div class="module-checklist pa-4 rounded-lg">
            <div class="text-caption font-weight-bold text-secondary-muted mb-2">
              PLANNED MODULE CAPABILITIES
            </div>
            <div
              v-for="(feature, idx) in plannedFeatures"
              :key="idx"
              class="d-flex align-center py-1"
            >
              <v-icon icon="mdi-check-circle-outline" color="success" size="18" class="mr-2" />
              <span class="text-body-2 text-white">{{ feature }}</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'mdi-cog-outline',
  },
  routePath: {
    type: String,
    required: true,
  },
  plannedFeatures: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.module-checklist {
  background-color: #202431;
  border: 1px solid rgba(255, 255, 255, 0.07);
}
</style>
