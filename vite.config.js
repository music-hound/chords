import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Awesome PWA',
        short_name: 'MyApp',
        theme_color: '#000000',
      },
    })
  ],
  base: '/chords',
})
