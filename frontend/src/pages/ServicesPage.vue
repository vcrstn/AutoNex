<template>
  <ModulePlaceholder
    title="Services"
    subtitle="Configure standard repair packages, labor rates, and inspection checklists."
    icon="mdi-wrench-cog-outline"
    route-path="/services"
    :planned-features="[
      'Service catalog (Preventive Maintenance, Mechanical, Electrical, Bodywork)',
      'Standard flat-rate labor pricing and estimated completion duration',
      'Bundled service templates for rapid repair order creation',
    ]"
  />
</template>

<script setup>
import ModulePlaceholder from '@/components/common/ModulePlaceholder.vue'
</script>
