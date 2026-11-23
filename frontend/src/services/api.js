import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

/**
 * Checks the Laravel API health endpoint (/api/health)
 */
export async function checkApiHealth() {
  const response = await apiClient.get('/health')
  return response.data
}

export default apiClient
