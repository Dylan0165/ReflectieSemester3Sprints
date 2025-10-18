import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dit zorgt dat je assets correct geladen worden in containers (ook bij Nginx)
export default defineConfig({
  plugins: [react()],
  base: './', // relative paths voor deployment
  build: {
    outDir: 'dist',
  },
})
