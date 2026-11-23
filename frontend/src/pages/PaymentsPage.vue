<template>
  <ModulePlaceholder
    title="Payments"
    subtitle="Review customer invoices, billing status, and payment settlements."
    icon="mdi-credit-card-check-outline"
    route-path="/payments"
    :planned-features="[
      'Automated invoice generation from completed Repair Orders',
      'Multi-method payment logging (Cash, Card, Bank Transfer, E-Wallet)',
      'Official receipt printing and balance tracking',
    ]"
  />
</template>

<script setup>
import ModulePlaceholder from '@/components/common/ModulePlaceholder.vue'
</script>
