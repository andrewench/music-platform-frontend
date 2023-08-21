import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import tsPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsPaths()],
  build: {
    outDir: 'build',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5183',
        changeOrigin: true,
      },
      '/uploads/images': {
        target: 'http://localhost:5183',
        changeOrigin: true,
      },
    },
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
})
