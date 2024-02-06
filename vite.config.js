import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import https from "https"
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(
    'mock', 
    process.cwd(),
    '' 
  )
    const processEnvValues = {
      'process.env': Object.entries(env).reduce(
        (prev, [key, val]) => {
          return {
            ...prev,
            [key]: val,
          }
        },
        {},
      )
    }
  return {
  plugins: [react()],
  server: {
      watch: {
        usePolling: true,
      },
      host: false, // needed for the Docker Container port mapping to work
      strictPort: true,
    port: 3000,
    proxy: {
      '/api': {
        target: processEnvValues['process.env'].VITE_API_URL,
        changeOrigin: true,
        secure: false,
        agent: new https.Agent()
      }
    }
  }
  }
})
