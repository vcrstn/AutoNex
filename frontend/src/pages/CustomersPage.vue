<template>
  <ModulePlaceholder
    title="Customers"
    subtitle="Manage customer profiles, contact logs, and vehicle ownership history."
    icon="mdi-account-group-outline"
    route-path="/customers"
    :planned-features="[
      'Customer directory with search, filter, and contact records',
      'Linked customer vehicles and repair order history',
      'Service reminder notifications and loyalty tracking',
    ]"
  />
</template>

<script setup>
import ModulePlaceholder from '@/components/common/ModulePlaceholder.vue'
</script>
