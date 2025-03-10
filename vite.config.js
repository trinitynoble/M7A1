import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/data': {
        target: 'https://bible-api.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,  // This removes '/data' from the path
      },
    },
  },
});
