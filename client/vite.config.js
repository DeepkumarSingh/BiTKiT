import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    proxy: {
      '/api': {
        target: 'https://bitkit-server.onrender.com', //  backend URL
        changeOrigin: true,
        secure: false,
      }
    },
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  }
})
