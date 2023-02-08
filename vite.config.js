// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
})