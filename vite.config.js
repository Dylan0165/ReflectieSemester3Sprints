import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ heel belangrijk: relatieve paden in CI-build
  build: { outDir: 'dist' },
})
