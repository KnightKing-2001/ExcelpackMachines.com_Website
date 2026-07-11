import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from "vite-plugin-sitemap";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://excelpackmachine.com',
      // Explicitly list your routes here for better indexing
      dynamicRoutes: [
        '/',
        '/catalog',
        // Add your known static routes here
      ],
      // Optional: Add frequent updates/priorities
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
})