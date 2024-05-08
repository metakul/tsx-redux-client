import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/smartwallet': {
        // target: 'https://smart-wallet-us83.onrender.com',
        target: 'http://localhost:8003/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/smartwallet/, ''),
      },
      '/blogApi': {
        // target: 'https://blog-app-1-7mgt.onrender.com/',
        target: 'http://localhost:8000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blogApi/, ''),
      },
    }
  }
})
