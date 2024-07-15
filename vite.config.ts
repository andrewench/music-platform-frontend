import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tsPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  const env = loadEnv('all', process.cwd(), '')

  return {
    plugins: [react(), tsPaths()],
    build: {
      outDir: '__build__',
      target: 'esnext',
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_HOST,
          changeOrigin: true,
        },
        '/uploads/images': {
          target: env.VITE_BACKEND_HOST,
          changeOrigin: true,
        },
      },
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: parseInt(env.VITE_FRONTEND_PORT),
    },
  }
})
