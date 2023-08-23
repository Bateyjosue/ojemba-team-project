import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
         main: resolve(__dirname, 'index.html'),
        header:resolve(__dirname,"src/Components/header.html"),
        hero:resolve(__dirname,'src/Components/hero.html'),
        button: resolve(__dirname, 'src/Components/button.html'),
        cardNameDescription:resolve(__dirname,'src/Components/cardNameDescription.html'),
        expand:resolve(__dirname,"src/Components/expand.html"),
        maibornWold:resolve(__dirname,"src/Components/maibornWolf.html"),
        kotakt:resolve(__dirname,"src/Components/kotakt.html"),
        managedTeams:resolve(__dirname,"src/Components/managedTeams.html"),
        ruanda:resolve(__dirname,"src/Components/ruanda.html"),
        sectionCardNameDescription:resolve(__dirname,"src/Components/sectionCardNameDescription.html"),
        sectionWithIcons:resolve(__dirname,"src/Components/sectionWithIcons.html"),
        skillset:resolve(__dirname,"src/Components/skillset.html"),
        textWithLine:resolve(__dirname,"src/Components/textWithLine.html"),
        unsere:resolve(__dirname,"src/Components/unsere.html"),
        footer: resolve(__dirname,"src/Components/footer.html")
      },
    },
  },
})
