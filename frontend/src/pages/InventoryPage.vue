<template>
  <ModulePlaceholder
    title="Inventory"
    subtitle="Control spare parts stock levels, SKUs, and supplier reorders."
    icon="mdi-package-variant-closed"
    route-path="/inventory"
    :planned-features="[
      'Auto parts and consumables SKU catalog with real-time stock quantities',
      'Low-stock threshold alerts and restock tracking',
      'Direct part allocation to active Repair Orders',
    ]"
  />
</template>

<script setup>
import ModulePlaceholder from '@/components/common/ModulePlaceholder.vue'
</script>
