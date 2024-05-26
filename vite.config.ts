/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    background_color: '#ffffff',
    description: '심는대로 거두는 놀라운 경험을',
    dir: 'ltr',
    display: 'standalone',
    name: '씨앗 모아',
    orientation: 'any',
    scope: '/',
    short_name: '씨앗 모아',
    start_url: '/',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    id: '씨앗 모아',
    lang: 'ko',
  },
};

export default defineConfig({
  plugins: [react(), visualizer() as PluginOption, VitePWA(manifestForPlugin)],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
