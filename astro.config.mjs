import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Tesouro dos Fieis",
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
        github: "https://github.com/tesourofieis/tesourofieis",
        "x.com": "https://x.com/tesourofieis",
        email: "mailto:info@tesourofieis.com",
      },
      sidebar: [
        {
          label: "Devocionario",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Rosario", link: "/rosario" },
            { label: "Salterio", link: "/salterio" },
            { label: "Oracao da manha", link: "/oracaomanha" },
            { label: "Angelus", link: "/angelus" },
            { label: "Oracao da noite", link: "/oracaonoite" },
            {
              label: "Pequeno Oficio de Nossa Senhora",
              items: [
                { label: "Matinas", link: "/oficion/matinas" },
                { label: "Vésperas", link: "/oficion/vesperas" },
                { label: "Completas", link: "/oficion/completas" },
              ],
            },
            {
              label: "Cãnticos",
              items: [
                {
                  label: "Antifonas de Nossa Senhora",
                  link: "/canticos/sacros/antifonas",
                },
                {
                  label: "Adoro te devote",
                  link: "/canticos/sacros/adorote",
                },
                {
                  label: "Ave verum",
                  link: "/canticos/sacros/aveverum",
                },
                {
                  label: "Ecce panis angelorum",
                  link: "/canticos/sacros/eccepanisangelorum",
                },
                {
                  label: "Parce domine",
                  link: "/canticos/sacros/parcedomine",
                },
                {
                  label: "O Salutaris",
                  link: "/canticos/sacros/salutaris",
                },
                {
                  label: "Tantum ergo",
                  link: "/canticos/sacros/tantumergo",
                },
              ],
            },
            {
              label: "Orações",
              items: [
                { label: "Pai nosso", link: "/oracoes/pai-nosso" },
                { label: "Ave Maria", link: "/oracoes/ave-maria" },
                { label: "Glória", link: "/oracoes/gloria" },
              ],
            },
          ],
        },
        {
          label: "Ritual",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Missa", link: "/missa" },
            { label: "Adoracao", link: "/adoracao" },
          ],
        },
        {
          label: "Fe",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Catecismo", link: "/catecismo" },
            { label: "Verdades", link: "/verdades" },
          ],
        },
      ],
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
