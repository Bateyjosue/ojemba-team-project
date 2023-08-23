import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        header: resolve(__dirname, 'src/Components/header.html'),
            hero: resolve(__dirname, 'src/Components/hero.html'),
      },
    },
  },
})