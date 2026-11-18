import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/biennio2-20262027-vue/',
  plugins: [
    vue(),
    tailwindcss()
  ],
})
