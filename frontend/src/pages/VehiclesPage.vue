<template>
  <ModulePlaceholder
    title="Vehicles"
    subtitle="Track registered vehicles, VINs, plate numbers, mileage, and diagnostic history."
    icon="mdi-car-sports"
    route-path="/vehicles"
    :planned-features="[
      'Vehicle registry with Make, Model, Year, VIN, and Plate Number',
      'Odometer and preventive maintenance schedule tracking',
      'Multi-point inspection and diagnostic notes per vehicle',
    ]"
  />
</template>

<script setup>
import ModulePlaceholder from '@/components/common/ModulePlaceholder.vue'
</script>
