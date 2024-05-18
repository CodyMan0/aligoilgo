/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer() as PluginOption
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },


});
