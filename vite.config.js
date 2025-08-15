import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// If deploying to https://<USER>.github.io/<REPO>/ set base to '/<REPO>/'
export default defineConfig({
  base: '/my-rainbow-app/',
  plugins: [react(), tailwindcss()],
})