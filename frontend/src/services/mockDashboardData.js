/**
 * GEARIFY – Clearly Identified Sample/Mock Data for Phase 1 Dashboard Visualization
 * NOTE: This file contains static demonstration data only. It is NOT connected to real database records yet.
 */

export const MOCK_DATA_NOTICE = 'Sample Visualization Data (Phase 1 Initialization)'

export const mockKpiMetrics = [
  {
    id: 'total-repairs',
    title: 'Total Repairs',
    value: '124',
    trend: '+12%',
    trendPositive: true,
    period: 'vs. last month',
    icon: 'mdi-wrench',
    accentColor: '#E53945',
    sparkline: [35, 48, 42, 65, 58, 82, 95],
  },
  {
    id: 'active-customers',
    title: 'Active Customers',
    value: '892',
    trend: '+8%',
    trendPositive: true,
    period: 'registered owners',
    icon: 'mdi-car-Multiple',
    iconFallback: 'mdi-account-group',
    accentColor: '#3B82F6',
    sparkline: [50, 55, 60, 58, 70, 78, 88],
  },
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    value: '₱245,560',
    trend: '+14%',
    trendPositive: true,
    period: 'current billing cycle',
    icon: 'mdi-currency-php',
    accentColor: '#27C58B',
    sparkline: [40, 52, 49, 68, 74, 85, 98],
  },
  {
    id: 'pending-jobs',
    title: 'Pending Jobs',
    value: '18',
    trend: '-6%',
    trendPositive: true,
    period: 'in service bays',
    icon: 'mdi-calendar-clock',
    accentColor: '#F5B942',
    sparkline: [75, 64, 70, 52, 48, 42, 36],
  },
]

export const mockMonthlyRevenueByRange = {
  '1M': {
    labels: ['Nov 1', 'Nov 7', 'Nov 14', 'Nov 21', 'Nov 28'],
    values: [42500, 81200, 114800, 118400, 132450],
    highlightLabel: 'Nov 28',
    highlightValue: '₱132,450',
  },
  '3M': {
    labels: ['Sep W1', 'Sep W3', 'Oct W1', 'Oct W3', 'Nov W1', 'Nov W4'],
    values: [148000, 172000, 195400, 210800, 228900, 245560],
    highlightLabel: 'Nov W4',
    highlightValue: '₱245,560',
  },
  '6M': {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    values: [162000, 178500, 169200, 198400, 221000, 245560],
    highlightLabel: 'Nov',
    highlightValue: '₱245,560',
  },
  '1Y': {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    values: [145000, 152000, 149000, 168000, 174500, 181200, 162000, 178500, 169200, 198400, 221000, 245560],
    highlightLabel: 'Nov',
    highlightValue: '₱245,560',
  },
}

export const mockRepairStatusOverview = {
  totalOrders: 124,
  primaryRate: '68%',
  primaryLabel: 'Completed',
  breakdown: [
    { label: 'Completed Repairs', count: 84, percentage: 68, color: '#E53945' },
    { label: 'In Progress / Maintenance', count: 22, percentage: 18, color: '#27C58B' },
    { label: 'Pending / Awaiting Parts', count: 18, percentage: 14, color: '#F5B942' },
  ],
}

export const mockRecentRepairOrders = [
  {
    orderId: 'RO-2026-1048',
    customer: 'Marco Villanueva',
    vehicle: '2023 Toyota GR86',
    plateNumber: 'NGA 8623',
    service: 'Full Synthetic Oil & Brake Pad Overhaul',
    technician: 'R. Santos',
    status: 'In Progress',
    amount: '₱14,850',
    updatedAt: 'Nov 22, 2026 • 4:15 PM',
  },
  {
    orderId: 'RO-2026-1047',
    customer: 'Elena Soriano',
    vehicle: '2022 Honda Civic RS',
    plateNumber: 'CBE 4410',
    service: 'CVT Transmission Fluid & Diagnostic Scan',
    technician: 'J. Dela Cruz',
    status: 'Completed',
    amount: '₱9,400',
    updatedAt: 'Nov 22, 2026 • 2:40 PM',
  },
  {
    orderId: 'RO-2026-1046',
    customer: 'Daniel Mendoza',
    vehicle: '2021 Mitsubishi Montero Sport',
    plateNumber: 'DAF 9012',
    service: 'Suspension Alignment & Shock Absorber Check',
    technician: 'M. Bautista',
    status: 'Awaiting Parts',
    amount: '₱22,300',
    updatedAt: 'Nov 22, 2026 • 1:10 PM',
  },
  {
    orderId: 'RO-2026-1045',
    customer: 'Clarisse Tan',
    vehicle: '2024 Mazda CX-5 AWD',
    plateNumber: 'NBO 7781',
    service: '20,000 KM Preventive Maintenance Service',
    technician: 'R. Santos',
    status: 'Completed',
    amount: '₱11,600',
    updatedAt: 'Nov 22, 2026 • 11:05 AM',
  },
  {
    orderId: 'RO-2026-1044',
    customer: 'Paolo Reyes',
    vehicle: '2020 Ford Ranger Raptor',
    plateNumber: 'NDR 5509',
    service: 'Turbo Intercooler Hose & Battery Replacement',
    technician: 'A. Garcia',
    status: 'Pending',
    amount: '₱18,950',
    updatedAt: 'Nov 21, 2026 • 5:30 PM',
  },
]

export const mockRecentActivities = [
  {
    id: 1,
    title: 'New repair order scheduled',
    detail: 'Toyota GR86 • Nov 22, 2026 • 4:15 PM • RO-2026-1048',
    icon: 'mdi-calendar-check',
    color: '#E53945',
  },
  {
    id: 2,
    title: 'Repair order completed',
    detail: 'Honda Civic RS • Nov 22, 2026 • RO-2026-1047',
    icon: 'mdi-wrench-check',
    color: '#27C58B',
  },
  {
    id: 3,
    title: 'Inventory stock updated',
    detail: 'Brembo Ceramic Brake Pads • +20 sets received',
    icon: 'mdi-package-variant-closed-check',
    color: '#3B82F6',
  },
  {
    id: 4,
    title: 'Parts requisition flagged',
    detail: 'Mitsubishi Montero Sport • Shock Absorber Assembly',
    icon: 'mdi-alert-circle-outline',
    color: '#F5B942',
  },
]

export const mockQuickActions = [
  {
    id: 'new-repair-order',
    label: 'Create Repair Order',
    icon: 'mdi-wrench-clock',
    to: '/repair-orders',
    primary: true,
  },
  {
    id: 'add-customer',
    label: 'Add Customer',
    icon: 'mdi-account-plus-outline',
    to: '/customers',
    primary: false,
  },
  {
    id: 'register-vehicle',
    label: 'Register Vehicle',
    icon: 'mdi-car-Info',
    iconFallback: 'mdi-car-cog',
    to: '/vehicles',
    primary: false,
  },
  {
    id: 'update-inventory',
    label: 'Update Inventory',
    icon: 'mdi-package-variant-plus',
    to: '/inventory',
    primary: false,
  },
  {
    id: 'view-reports',
    label: 'View Reports',
    icon: 'mdi-chart-bar',
    to: '/reports',
    primary: false,
  },
]
