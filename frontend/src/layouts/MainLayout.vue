<template>
  <v-app class="gearify-app">
    <!-- Left Sidebar Navigation -->
    <AppSidebar
      v-model="drawerOpen"
      :rail="sidebarRail"
    />

    <!-- Top Navigation Bar -->
    <AppTopbar
      :api-online="apiOnline"
      @toggle-navigation="handleNavigationToggle"
      @refresh-api="verifyBackendHealth"
    />

    <!-- Main Content Viewport -->
    <v-main class="gearify-main">
      <v-container fluid class="pa-6">
        <router-view
          :api-online="apiOnline"
          :api-info="apiInfo"
          @refresh-api="verifyBackendHealth"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import AppSidebar from '@/components/navigation/AppSidebar.vue'
import AppTopbar from '@/components/navigation/AppTopbar.vue'
import { checkApiHealth } from '@/services/api'

const { mdAndDown } = useDisplay()

const drawerOpen = ref(true)
const sidebarRail = ref(false)

const apiOnline = ref(false)
const apiInfo = ref(null)

function handleNavigationToggle() {
  if (mdAndDown.value) {
    drawerOpen.value = !drawerOpen.value
  } else {
    sidebarRail.value = !sidebarRail.value
  }
}

async function verifyBackendHealth() {
  try {
    const data = await checkApiHealth()
    apiOnline.value = data?.status === 'ok'
    apiInfo.value = data
  } catch {
    apiOnline.value = false
    apiInfo.value = null
  }
}

onMounted(() => {
  verifyBackendHealth()
})
</script>

<style scoped>
.gearify-main {
  background-color: #151821 !important;
  min-height: 100vh;
}
</style>
