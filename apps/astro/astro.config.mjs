import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";
import robotsTxt from "astro-robots-txt";
import { sidebar } from "./sidebar";

const site = "https://tesourofieis.com";

// https://astro.build/config
export default defineConfig({
  site: site,
  output: "static",
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
            src: "https://www.googletagmanager.com/gtag/js?id=G-CYLKZM1NJQ",
            async: true,
          },
        },
        {
          tag: "script",
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
        src: "./src/assets/favicon.png",
      },
      social: [
        { icon: "email", href: "mailto:info@tesourofieis.com", label: "email" },
        { icon: "x.com", href: "https://x.com/tesourofieis", label: "x" },
        {
          icon: "github",
          href: "https://github.com/tesourofieis",
          label: "github",
        },
        {
          icon: "patreon",
          href: "https://ko-fi.com/tesourofieis",
          label: "ko-fi",
        },
      ],
      sidebar: sidebar,
      customCss: [
        "@fontsource/dm-serif-display",
        "@fontsource/dm-serif-text",
        "./src/styles/global.css",
      ],
    }),
    react(),
    sitemap(),
    robotsTxt(),
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
    plugins: [tailwindcss()],
  },
  image: {
    service: passthroughImageService(),
  },
});
