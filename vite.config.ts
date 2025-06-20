
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'], // Add your static assets here
      manifest: {
        name: 'Обратные часы',
        short_name: 'Часы',
        description: 'Показывает сколько времени осталось до конца суток, начиная с 08:00.',
        theme_color: '#F5EEDA', // Vintage Paper
        background_color: '#4A3B31', // Vintage Dark Brown
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        icons: [
          {
            src: '/icons/icon-192x192.png', // Create this file in public/icons/
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png', // Create this file in public/icons/
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512-maskable.png', // Create this file in public/icons/
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,ttf}'], // Ensure fonts are cached
        runtimeCaching: [
          {
            urlPattern: ({url}) => url.origin === 'https://fonts.googleapis.com',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: {
                maxEntries: 5,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
              },
            },
          },
          {
            urlPattern: ({url}) => url.origin === 'https://fonts.gstatic.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 5,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 Year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  base: './', // Ensures assets are loaded correctly with HashRouter or relative paths
});
