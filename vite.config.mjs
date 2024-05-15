import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  esbuild: {
    /**
     * Prevents ESBuild to throw when using a feature not supported by the
     * list of supported browsers coming from the `browserslist` file.
     */
    supported: {
      'top-level-await': true,
    },
  },
  plugins: [svelte()],
  build: {
    outDir: 'build', // output to build to conform to existing build scripts
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Put node_modules into their own chunks
          if (id.includes('node_modules')) {
            const packageName = id.split('node_modules/')[1].split('/')[0];
            return `vendor.${packageName}`;
          }

          // Chunk all code in /src/lib into a "lib" chunk
          if (id.includes(path.normalize('/src/lib/'))) {
            return 'lib';
          }

          // Chunk all code in each folder under /src/routes into their own chunk
          const routesMatch = id.match(/src[\\/]routes[\\/](\w+)[\\/]/);
          if (routesMatch) {
            return `routes.${routesMatch[1]}`;
          }
        },
      },
    },
  },
  server: {
    port: 8080, // use 8080 so SSO will still work
  },
  resolve: {
    alias: {
      '$lib': path.resolve(__dirname, 'src/lib'),
    },
  },
});
