import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { readFileSync } from 'node:fs';

// https://vite.dev/config/
export default defineConfig({
  base: '/choosy/',
  server: {
    https: {
      key: readFileSync('ssl/key.pem'),
      cert: readFileSync('ssl/cert.pem'),
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Choosy',
        short_name: 'Choosy',
        description: 'The best and probably only wine choice helper',
        theme_color: '#653E52',
        background_color: '#653E52',
        icons: [
          {
            src: '60x60.png',
            sizes: '60x60',
            type: 'image/png'
          },
          {
            src: '76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: '120x120.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: '144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '150x150.png',
            sizes: '150x150',
            type: 'image/png'
          },
          {
            src: '152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: '180x180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: '256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "maskable"
          },
          {
            src: 'maskable-196x196.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: "maskable"
          },
          {
            src: 'maskable-256x256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: "maskable"
          },
          {
            src: 'maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "maskable"
          },
        ],
        screenshots: [
          {
            src: "screenshot-800x800.png",
            sizes: "800x800",
            type: "image/png",
            form_factor: "narrow"
          },
          {
            src: "screenshot-800x800.png",
            sizes: "800x800",
            type: "image/png",
            form_factor: "wide"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
