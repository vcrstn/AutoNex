import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import CustomersPage from '@/pages/CustomersPage.vue'
import VehiclesPage from '@/pages/VehiclesPage.vue'
import ServicesPage from '@/pages/ServicesPage.vue'
import RepairOrdersPage from '@/pages/RepairOrdersPage.vue'
import InventoryPage from '@/pages/InventoryPage.vue'
import PaymentsPage from '@/pages/PaymentsPage.vue'
import ReportsPage from '@/pages/ReportsPage.vue'
import SettingsPage from '@/pages/SettingsPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: DashboardPage,
        meta: {
          title: 'Dashboard',
          subtitle: "Drive Better. We'll Take Care of the Rest.",
          icon: 'mdi-view-dashboard',
        },
      },
      {
        path: 'customers',
        name: 'Customers',
        component: CustomersPage,
        meta: {
          title: 'Customers',
          subtitle: 'Manage customer profiles, contact logs, and service history.',
          icon: 'mdi-account-group',
        },
      },
      {
        path: 'vehicles',
        name: 'Vehicles',
        component: VehiclesPage,
        meta: {
          title: 'Vehicles',
          subtitle: 'Track registered vehicles, VINs, mileage, and diagnostics.',
          icon: 'mdi-car-sports',
        },
      },
      {
        path: 'services',
        name: 'Services',
        component: ServicesPage,
        meta: {
          title: 'Services',
          subtitle: 'Configure standard repair packages, labor rates, and inspection checklists.',
          icon: 'mdi-wrench-cog',
        },
      },
      {
        path: 'repair-orders',
        name: 'RepairOrders',
        component: RepairOrdersPage,
        meta: {
          title: 'Repair Orders',
          subtitle: 'Monitor active repair jobs, bay assignments, and technician progress.',
          icon: 'mdi-clipboard-text-clock',
        },
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: InventoryPage,
        meta: {
          title: 'Inventory',
          subtitle: 'Control spare parts stock levels, SKUs, and supplier reorders.',
          icon: 'mdi-package-variant-closed',
        },
      },
      {
        path: 'payments',
        name: 'Payments',
        component: PaymentsPage,
        meta: {
          title: 'Payments',
          subtitle: 'Review customer invoices, billing status, and payment settlements.',
          icon: 'mdi-credit-card-check-outline',
        },
      },
      {
        path: 'reports',
        name: 'Reports',
        component: ReportsPage,
        meta: {
          title: 'Reports',
          subtitle: 'Analyze shop performance, technician productivity, and financial summaries.',
          icon: 'mdi-chart-box-outline',
        },
      },
      {
        path: 'settings',
        name: 'Settings',
        component: SettingsPage,
        meta: {
          title: 'Settings',
          subtitle: 'Configure Gearify shop preferences, tax rates, and user permissions.',
          icon: 'mdi-cog-outline',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  const pageTitle = to.meta?.title ? `${to.meta.title} | GEARIFY` : 'GEARIFY – Car Repair Shop Management System'
  document.title = pageTitle
})

export default router
