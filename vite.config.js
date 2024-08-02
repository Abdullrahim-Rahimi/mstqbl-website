import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  plugins: [
    react(),

    // Add rollup-plugin-copy to include all CSS files

    copy({
      targets: [
        { src: 'src/*.css', dest: 'dist' },
        // Add more targets for different directories or patterns if needed
      ],

      verbose: true, // Set to true for debugging
    }),
  ],
});
