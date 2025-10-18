import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 🔥 relatieve paden, voorkomt redirect naar root
  build: {
    outDir: 'dist',
  },
})
