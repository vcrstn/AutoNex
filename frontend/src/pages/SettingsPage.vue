<template>
  <ModulePlaceholder
    title="Settings"
    subtitle="Configure Gearify shop preferences, tax rates, and user permissions."
    icon="mdi-cog-outline"
    route-path="/settings"
    :planned-features="[
      'Gearify shop profile, operating hours, and service bay configuration',
      'Role-based access control (Admin, Service Advisor, Technician)',
      'Invoice branding, tax rates, and notification preferences',
    ]"
  />
</template>

<script setup>
import ModulePlaceholder from '@/components/common/ModulePlaceholder.vue'
</script>
