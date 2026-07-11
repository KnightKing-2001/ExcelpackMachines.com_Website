import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from "vite-plugin-sitemap";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://excelpackmachine.com',
    }),
  ],
})
