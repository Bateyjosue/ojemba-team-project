import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
  input: {
        main: resolve(__dirname, 'index.html'),
        header:resolve(__dirname,"src/Components/header.html"),
        hero:resolve(__dirname,'src/Components/hero.html'),
        maibornWold:resolve(__dirname,"src/Components/maibornWolf.html"),
    
        managedTeams:resolve(__dirname,"src/Components/managedTeams.html"),
        
        
        unsere:resolve(__dirname,"src/Components/unsere.html"),
        ruanda:resolve(__dirname,"src/Components/ruanda.html"),
        kotakt:resolve(__dirname,"src/Components/kotakt.html"),
        footer: resolve(__dirname,"src/Components/footer.html")
      },
    },
  },
})
