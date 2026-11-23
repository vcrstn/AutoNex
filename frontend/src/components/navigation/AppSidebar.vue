<template>
  <v-navigation-drawer
    v-model="drawerModel"
    :rail="rail && !isMobile"
    :temporary="isMobile"
    width="264"
    rail-width="78"
    class="gearify-sidebar"
    border="0"
  >
    <!-- Brand Header -->
    <div class="sidebar-brand d-flex align-center px-4 py-4">
      <div class="brand-logo-wrap d-flex align-center justify-center">
        <img
          :src="logoUrl"
          alt="GEARIFY Logo"
          class="brand-logo-img"
        />
      </div>
      <div v-if="!rail || isMobile" class="ml-3 overflow-hidden">
        <div class="brand-wordmark">
          GEAR<span class="brand-accent">IFY</span>
        </div>
        <div class="brand-subtext text-truncate">
          Car Repair Shop OS
        </div>
      </div>
    </div>

    <v-divider class="border-opacity-10 mx-3 mb-2" />

    <!-- Navigation Links -->
    <div class="px-3 py-2">
      <div
        v-if="!rail || isMobile"
        class="nav-section-label px-3 mb-2"
      >
        SHOP MANAGEMENT
      </div>

      <v-list
        nav
        density="comfortable"
        class="pa-0 bg-transparent"
      >
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          rounded="lg"
          class="gearify-nav-item mb-1"
          active-class="gearify-nav-item--active"
        >
          <template v-if="item.badge && (!rail || isMobile)" #append>
            <v-chip
              size="x-small"
              :color="item.badgeColor || 'primary'"
              variant="tonal"
              class="font-weight-bold"
            >
              {{ item.badge }}
            </v-chip>
          </template>
        </v-list-item>
      </v-list>
    </div>

    <!-- Bottom User Profile & Theme Status -->
    <template #append>
      <div class="pa-3">
        <!-- Dark Automotive Mode Indicator -->
        <div
          v-if="!rail || isMobile"
          class="theme-indicator d-flex align-center justify-space-between px-3 py-2 mb-3 rounded-lg"
        >
          <div class="d-flex align-center">
            <v-icon icon="mdi-weather-night" size="18" color="secondary" class="mr-2" />
            <span class="text-caption font-weight-medium text-secondary-muted">Dark Automotive</span>
          </div>
          <v-chip size="x-small" color="primary" variant="flat" class="font-weight-bold">
            ON
          </v-chip>
        </div>

        <!-- User Profile Card -->
        <div class="user-profile-card d-flex align-center pa-2 rounded-lg">
          <v-avatar color="primary" size="38" class="font-weight-bold text-white">
            V
          </v-avatar>
          <div v-if="!rail || isMobile" class="ml-3 flex-grow-1 overflow-hidden">
            <div class="text-body-2 font-weight-semibold text-white text-truncate">
              Vict
            </div>
            <div class="text-caption text-secondary-muted text-truncate">
              Shop Administrator
            </div>
          </div>
          <v-btn
            v-if="!rail || isMobile"
            icon="mdi-chevron-right"
            variant="text"
            size="small"
            color="on-surface-variant"
            to="/settings"
            title="Account & Shop Settings"
          />
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import logoUrl from '@/assets/gearify-logo.png'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  rail: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const { mdAndDown } = useDisplay()
const isMobile = computed(() => mdAndDown.value)

const drawerModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

// Required 9 Sidebar Navigation Items
const navItems = [
  {
    title: 'Dashboard',
    to: '/dashboard',
    icon: 'mdi-view-dashboard',
  },
  {
    title: 'Customers',
    to: '/customers',
    icon: 'mdi-account-group-outline',
  },
  {
    title: 'Vehicles',
    to: '/vehicles',
    icon: 'mdi-car-sports',
  },
  {
    title: 'Services',
    to: '/services',
    icon: 'mdi-wrench-cog-outline',
  },
  {
    title: 'Repair Orders',
    to: '/repair-orders',
    icon: 'mdi-clipboard-text-clock-outline',
    badge: '18',
    badgeColor: 'warning',
  },
  {
    title: 'Inventory',
    to: '/inventory',
    icon: 'mdi-package-variant-closed',
  },
  {
    title: 'Payments',
    to: '/payments',
    icon: 'mdi-credit-card-check-outline',
  },
  {
    title: 'Reports',
    to: '/reports',
    icon: 'mdi-chart-box-outline',
  },
  {
    title: 'Settings',
    to: '/settings',
    icon: 'mdi-cog-outline',
  },
]
</script>

<style scoped>
.gearify-sidebar {
  background-color: #202431 !important;
  border-right: 1px solid rgba(255, 255, 255, 0.07) !important;
}

.brand-logo-wrap {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(229, 57, 69, 0.1);
  border: 1px solid rgba(229, 57, 69, 0.28);
  padding: 4px;
  flex-shrink: 0;
}

.brand-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.brand-wordmark {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: 0.04em;
  color: #F4F5F8;
  line-height: 1.15;
}

.brand-accent {
  color: #E53945;
}

.brand-subtext {
  font-size: 0.72rem;
  color: #9299A8;
  letter-spacing: 0.02em;
}

.nav-section-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #9299A8;
  opacity: 0.75;
}

.gearify-nav-item {
  color: #9299A8 !important;
  font-weight: 600 !important;
  border-radius: 10px !important;
  transition: all 0.18s ease;
}

.gearify-nav-item:hover {
  background-color: rgba(255, 255, 255, 0.04) !important;
  color: #F4F5F8 !important;
}

.gearify-nav-item--active {
  background: linear-gradient(90deg, #E53945 0%, #C62834 100%) !important;
  color: #FFFFFF !important;
  box-shadow: 0 4px 14px rgba(229, 57, 69, 0.28);
}

.gearify-nav-item--active :deep(.v-list-item-title) {
  font-weight: 600 !important;
  color: #FFFFFF !important;
}

.theme-indicator {
  background-color: rgba(21, 24, 33, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.user-profile-card {
  background-color: #292F3D;
  border: 1px solid rgba(255, 255, 255, 0.07);
}
</style>
