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
        kotakt:resolve(__dirname,"src/Components/kotakt.html"),
        managedTeams:resolve(__dirname,"src/Components/managedTeams.html"),
        ruanda:resolve(__dirname,"src/Components/ruanda.html"),
        sectionCardNameDescription:resolve(__dirname,"src/Components/sectionCardNameDescription.html"),
        sectionWithIcons:resolve(__dirname,"src/Components/sectionWithIcons.html"),
        unsere:resolve(__dirname,"src/Components/unsere.html"),
        footer: resolve(__dirname,"src/Components/footer.html"),
        founders:resolve(__dirname,"src/Components/founders.html"),
        qualitat:resolve(__dirname, "src/Components/qualitat.html"),
      },
    },
  },
})
