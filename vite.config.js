import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~animate.css': 'animate.css/animate.css',
      '~loaders.css': 'loaders.css',
    },
    
  },
  server: {
    fs: {
      strict: false
    }
  },
})
