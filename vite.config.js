import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base: '/' in locale; in produzione (gh-pages) viene sovrascritta
// dal flag --base nello script "predeploy" di package.json
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    tailwindcss()
  ],
})
