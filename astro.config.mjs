import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { sidebar } from "./sidebar.ts";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://tesourofieis.com",
  compressHTML: true,
  integrations: [
    starlight({
      title: "Tesouro dos Fiéis",
      components: {
        Head: "./src/components/Head.astro",
      },
      editLink: {
        baseUrl: "https://github.com/tesourofieis/tesourofieis/edit/master/",
      },
      locales: {
        root: {
          label: "Português",
          lang: "pt",
        },
      },
      logo: {
        src: "./public/favicon.svg",
      },
      social: {
        "x.com": "https://x.com/tesourofieis",
        github: "https://github.com/tesourofieis/tesourofieis",
        discord: "https://discord.gg/Ga8Xnjmk62",
        patreon: "https://www.patreon.com/tesourofieis",
      },
      sidebar: sidebar,
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  markdown: {
    rehypePlugins: [rehypeHeadingIds],
  },
  test: {
    watch: false,
  },
  vite: {
    server: {
      watch: {
        ignored: [
          "src/lib/resources/divinum-officium",
          "!src/lib/resources/divinum-officium/web/www/missa/Portugues",
          "!src/lib/resources/divinum-officium/web/www/missa/Latin",
        ],
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },
});
