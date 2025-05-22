import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'; // if you're testing React components

export default defineConfig({
  plugins: [react()], // if you're testing React components
  test: {
    globals: true,
    environment: 'happy-dom', // or 'jsdom'
    setupFiles: [], // optional setup files
  },
});
