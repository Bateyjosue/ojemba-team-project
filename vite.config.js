import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        entry: resolve(__dirname, 'index.html'),
        header: resolve(__dirname, 'src/Components/header.html'),
        hero: resolve(__dirname, 'src/Components/hero.html'),
      },
    },
  },
})