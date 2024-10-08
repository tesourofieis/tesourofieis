import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig, passthroughImageService } from "astro/config";

import { sidebar } from "./sidebar";

const site = "https://tesourofieis.com";

// https://astro.build/config
export default defineConfig({
  site: site,
  output: "static",
  experimental: {
    contentCollectionCache: true,
  },
  integrations: [
    starlight({
      title: "Tesouro dos Fiéis",
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: `${site}/og.png`,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: `${site}/og.png`,
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "og:url",
            property: "og:url",
            content: site,
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:title",
            content: "Tesouro dos Fiéis",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image:alt",
            content: "Tesouro dos Fiéis",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:site",
            content: "@tesourofieis",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:creator",
            content: "@tesourofieis",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:domain",
            content: site,
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "keywords",
            content:
              "Espaço dedicado à oração, exposição e preservação das santas tradições da Igreja",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "author",
            content: "Tesouro dos Fiéis",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: "index, follow",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "manifest",
            href: "/manifest.json",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#32302f",
          },
        },
        {
          tag: "script",
          attrs: {
            type: "text/partytown",
            src: "https://www.googletagmanager.com/gtag/js?id=G-CYLKZM1NJQ",
            defer: true,
          },
        },
        {
          tag: "script",
          attrs: {
            type: "text/partytown",
            defer: true,
          },
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-CYLKZM1NJQ');`,
        },
      ],
      locales: {
        root: {
          label: "Português",
          lang: "pt",
        },
      },
      logo: {
        src: "./src/assets/favicon.svg",
      },
      social: {
        email: "mailto:info@tesourofieis.com",
        "x.com": "https://x.com/tesourofieis",
        github: "https://github.com/tesourofieis",
        patreon: "https://www.patreon.com/tesourofieis",
      },
      sidebar: sidebar,
      customCss: [
        "@fontsource/berkshire-swash",
        "@fontsource-variable/eb-garamond",
        "./src/tailwind.css",
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    robotsTxt(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeHeadingIds],
  },
  vite: {
    server: {
      watch: {
        ignored: ["**/src-tauri/**"],
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },
});
