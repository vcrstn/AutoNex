import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const gearifyDarkTheme = {
  dark: true,
  colors: {
    background: '#151821',
    surface: '#292F3D',
    'surface-bright': '#32394A',
    'surface-variant': '#202431',
    'on-surface-variant': '#9299A8',
    primary: '#E53945',
    'primary-darken-1': '#C62834',
    secondary: '#FF626B',
    'secondary-darken-1': '#E53945',
    error: '#FF5252',
    info: '#3B82F6',
    success: '#27C58B',
    warning: '#F5B942',
    'on-background': '#F4F5F8',
    'on-surface': '#F4F5F8',
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'gearifyDarkTheme',
    themes: {
      gearifyDarkTheme,
    },
  },
  defaults: {
    VCard: {
      rounded: 'lg',
      elevation: 0,
    },
    VBtn: {
      rounded: 'lg',
      elevation: 0,
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
    },
  },
})
