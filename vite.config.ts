import { defineConfig } from 'vite'
import tsPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tsPaths()],
  build: {
    outDir: 'build',
  },
})
