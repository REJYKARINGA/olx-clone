import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'] // Example of manual chunking
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Adjust the chunk size warning limit
  }
});
