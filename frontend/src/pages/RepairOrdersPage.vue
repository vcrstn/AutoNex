<template>
  <ModulePlaceholder
    title="Repair Orders"
    subtitle="Monitor active repair jobs, bay assignments, and technician progress."
    icon="mdi-clipboard-text-clock-outline"
    route-path="/repair-orders"
    :planned-features="[
      'End-to-end job lifecycle (Pending, In Progress, Awaiting Parts, Completed)',
      'Technician and service bay assignment management',
      'Itemized labor and spare parts cost calculation',
    ]"
  />
</template>

<script setup>
import ModulePlaceholder from '@/components/common/ModulePlaceholder.vue'
</script>
