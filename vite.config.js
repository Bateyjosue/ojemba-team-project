import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        header:resolve(__dirname,"src/components/header.html"),
        hero:resolve(__dirname,'src/components/hero.html'),
        maibornWold:resolve(__dirname,"src/components/maibornWolf.html"),
        kotakt:resolve(__dirname,"src/components/kotakt.html"),
        managedTeams:resolve(__dirname,"src/components/managedTeams.html"),
        ruanda:resolve(__dirname,"src/components/ruanda.html"),
        sectionWithIcons:resolve(__dirname,"src/components/sectionWithIcons.html"),
        unsere:resolve(__dirname,"src/components/unsere.html"),
        footer: resolve(__dirname,"src/components/footer.html"),
        founders:resolve(__dirname,"src/components/founders.html"),
        qualitat:resolve(__dirname, "src/components/qualitat.html"),
      },
    },
  },
})
