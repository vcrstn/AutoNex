<template>
  <v-app-bar
    flat
    height="72"
    class="gearify-topbar px-4"
  >
    <!-- Mobile / Rail Toggle Button -->
    <v-btn
      icon
      variant="text"
      color="on-surface"
      class="mr-2"
      @click="$emit('toggle-navigation')"
    >
      <v-icon icon="mdi-menu" />
    </v-btn>

    <!-- Global Search Field -->
    <div class="search-field-container d-flex align-center">
      <v-text-field
        v-model="searchQuery"
        placeholder="Search customers, vehicles, plate numbers, or repair orders..."
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        density="compact"
        flat
        hide-details
        single-line
        bg-color="#202431"
        class="gearify-search-input"
      >
        <template #append-inner>
          <span class="kbd-shortcut d-none d-sm-inline-flex">Ctrl + K</span>
        </template>
      </v-text-field>
    </div>

    <v-spacer />

    <!-- Right Controls: API Status Badge, Notifications, User Avatar -->
    <div class="d-flex align-center ga-3">
      <!-- Live Backend API Connection Pill -->
      <v-tooltip location="bottom">
        <template #activator="{ props: tooltipProps }">
          <v-chip
            v-bind="tooltipProps"
            size="small"
            :color="apiOnline ? 'success' : 'warning'"
            variant="tonal"
            class="d-none d-md-inline-flex font-weight-semibold"
            prepend-icon="mdi-api"
            @click="$emit('refresh-api')"
          >
            {{ apiOnline ? 'API Connected' : 'API Standby' }}
          </v-chip>
        </template>
        <span>Laravel REST API Health Status (click to re-verify)</span>
      </v-tooltip>

      <!-- Notification Icon with Indicator -->
      <v-menu location="bottom end" offset="10">
        <template #activator="{ props: menuProps }">
          <v-btn
            v-bind="menuProps"
            icon
            variant="tonal"
            color="on-surface"
            size="40"
            class="topbar-icon-btn"
          >
            <v-badge
              color="primary"
              content="3"
              floating
            >
              <v-icon icon="mdi-bell-outline" size="20" />
            </v-badge>
          </v-btn>
        </template>

        <v-card width="340" class="gearify-card pa-3">
          <div class="d-flex align-center justify-space-between px-2 pb-2">
            <span class="title-semibold text-body-2">Shop Notifications</span>
            <v-chip size="x-small" color="primary" variant="tonal">Sample</v-chip>
          </div>
          <v-divider class="border-opacity-10 mb-2" />
          <v-list density="compact" bg-color="transparent">
            <v-list-item
              prepend-icon="mdi-wrench-clock"
              title="RO-2026-1048 assigned to Bay 2"
              subtitle="2023 Toyota GR86 • 10 mins ago"
            />
            <v-list-item
              prepend-icon="mdi-package-variant"
              title="Brake Pads stock updated (+20)"
              subtitle="Inventory • 1 hour ago"
            />
            <v-list-item
              prepend-icon="mdi-check-decagram"
              title="RO-2026-1047 marked Completed"
              subtitle="2022 Honda Civic RS • 2 hours ago"
            />
          </v-list>
        </v-card>
      </v-menu>

      <!-- User Profile / Avatar Dropdown -->
      <v-menu location="bottom end" offset="10">
        <template #activator="{ props: userMenuProps }">
          <v-btn
            v-bind="userMenuProps"
            variant="tonal"
            class="user-avatar-btn px-2"
            height="42"
            rounded="pill"
          >
            <v-avatar color="primary" size="30" class="font-weight-bold text-white mr-2">
              V
            </v-avatar>
            <span class="text-body-2 font-weight-semibold d-none d-sm-inline mr-1">Vict</span>
            <v-icon icon="mdi-chevron-down" size="16" class="text-secondary-muted" />
          </v-btn>
        </template>

        <v-card width="230" class="gearify-card pa-2">
          <div class="px-3 py-2">
            <div class="font-weight-bold text-body-2">Vict</div>
            <div class="text-caption text-secondary-muted">admin@gearify.local</div>
          </div>
          <v-divider class="border-opacity-10 my-1" />
          <v-list density="compact" bg-color="transparent">
            <v-list-item
              prepend-icon="mdi-view-dashboard-outline"
              title="Dashboard"
              to="/dashboard"
              rounded="md"
            />
            <v-list-item
              prepend-icon="mdi-cog-outline"
              title="Shop Settings"
              to="/settings"
              rounded="md"
            />
          </v-list>
        </v-card>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  apiOnline: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle-navigation', 'refresh-api'])

const searchQuery = ref('')
</script>

<style scoped>
.gearify-topbar {
  background-color: #151821 !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07) !important;
}

.search-field-container {
  width: 100%;
  max-width: 460px;
}

.gearify-search-input :deep(.v-field) {
  border-radius: 10px !important;
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.875rem;
}

.gearify-search-input :deep(.v-field--focused) {
  border-color: rgba(229, 57, 69, 0.6);
}

.kbd-shortcut {
  font-size: 0.7rem;
  font-weight: 600;
  color: #9299A8;
  background-color: #292F3D;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 2px 7px;
  white-space: nowrap;
}

.topbar-icon-btn {
  background-color: #202431 !important;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px !important;
}

.user-avatar-btn {
  background-color: #202431 !important;
  border: 1px solid rgba(255, 255, 255, 0.07);
  text-transform: none !important;
}
</style>
