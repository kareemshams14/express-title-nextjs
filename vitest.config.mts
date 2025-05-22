import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'; // if you're testing React components
import tsconfigPaths from 'vite-tsconfig-paths'; // Import the plugin

export default defineConfig({
  plugins: [
    react(), // if you're testing React components
    tsconfigPaths(), // Add the plugin here
  ],
  test: {
    globals: true,
    environment: 'happy-dom', // or 'jsdom'
    setupFiles: [], // optional setup files
  },
});
