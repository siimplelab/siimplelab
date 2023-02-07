// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  plugins: [
    {
      name: 'inject',
      transformIndexHtml() {
        return [
          {
            tag: 'script',
            attrs: { type: 'module', src: './external.js', defer: true },
          },
        ];
      },
    },
  ],
  build: {
    assetsInclude: ['**/*.js'],
    outDir: '../dist',
  },
})