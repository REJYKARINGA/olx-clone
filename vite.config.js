import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ['react', 'react-dom'] // Example of manual chunking
//         }
//       }
//     },
//     chunkSizeWarningLimit: 1000 // Adjust the chunk size warning limit
//   }
// });
