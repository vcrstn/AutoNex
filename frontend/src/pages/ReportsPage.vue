<template>
  <ModulePlaceholder
    title="Reports"
    subtitle="Analyze shop performance, technician productivity, and financial summaries."
    icon="mdi-chart-box-outline"
    route-path="/reports"
    :planned-features="[
      'Monthly and annual revenue analytics with exportable summaries',
      'Top-performing services and technician throughput metrics',
      'Parts consumption and gross margin reports',
    ]"
  />
</template>

<script setup>
import ModulePlaceholder from '@/components/common/ModulePlaceholder.vue'
</script>
