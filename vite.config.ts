/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import styleX from 'vite-plugin-stylex';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
  },
});
