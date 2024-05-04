import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/blogApi': {
        target: 'https://blog-app-1-7mgt.onrender.com/',
        // target: 'http://localhost:8000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blogApi/, ''),
      },
      '/smartwallet': {
        target: 'https://smart-wallet-us83.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/smartwallet/, ''),
      },
    }
  }
})
