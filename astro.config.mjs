import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { sidebar } from "./sidebar.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://tesourofieis.com",
  integrations: [
    starlight({
      title: "Tesouro dos Fiéis",
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
        patreon: "https://www.patreon.com/tesourofieis",
        email: "mailto:info@tesourofieis.com",
        discord: "https://discord.gg/Ga8Xnjmk62",
      },
      sidebar: sidebar,
      customCss: [
        "./src/tailwind.css",
        // Fontsource files for to regular and semi-bold font weights.
        "@fontsource/cardo/400.css",
        "@fontsource/cardo/700.css",
        "@fontsource/berkshire-swash",
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
