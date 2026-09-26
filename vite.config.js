import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures assets load cleanly on any subpath, itch.io, GitHub Pages, or local web server
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
