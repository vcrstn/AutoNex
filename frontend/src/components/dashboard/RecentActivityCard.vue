<template>
  <v-card class="gearify-card pa-5 h-100">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-4">
      <div class="d-flex align-center">
        <v-avatar color="rgba(229, 57, 69, 0.14)" size="36" rounded="lg" class="mr-3">
          <v-icon icon="mdi-history" color="primary" size="20" />
        </v-avatar>
        <div>
          <h3 class="title-semibold text-subtitle-1 mb-0">
            Recent Activities
          </h3>
          <div class="text-caption text-secondary-muted">
            Live shop floor timeline (Sample)
          </div>
        </div>
      </div>

      <v-btn
        variant="text"
        size="small"
        color="secondary"
        to="/reports"
        class="text-none font-weight-semibold"
        append-icon="mdi-arrow-right"
      >
        View All
      </v-btn>
    </div>

    <!-- Timeline Items -->
    <div class="activity-timeline">
      <div
        v-for="(item, index) in activities"
        :key="item.id"
        class="activity-item d-flex align-start"
        :class="{ 'mb-4': index !== activities.length - 1 }"
      >
        <!-- Left Timeline Indicator + Icon -->
        <div class="d-flex flex-column align-center mr-3">
          <div
            class="activity-icon-circle d-flex align-center justify-center"
            :style="{
              backgroundColor: `${item.color}1F`,
              borderColor: `${item.color}4D`,
            }"
          >
            <v-icon :icon="item.icon" :color="item.color" size="18" />
          </div>
          <div
            v-if="index !== activities.length - 1"
            class="activity-connector mt-1"
          />
        </div>

        <!-- Activity Content -->
        <div class="flex-grow-1 pt-1">
          <div class="text-body-2 font-weight-semibold text-white">
            {{ item.title }}
          </div>
          <div class="text-caption text-secondary-muted">
            {{ item.detail }}
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  activities: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.activity-icon-circle {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid;
  flex-shrink: 0;
}

.activity-connector {
  width: 2px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.08);
}
</style>
