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
          label: "Missal",
          items: [
            { label: "Calendario", link: "/missal/calendario" },
            { label: "Missa do dia", link: "/missal/dia" },
            { label: "Próprio de Portugal", link: "/missal/proprioportugal" },
          ],
        },
        {
          label: "Devocionario",
          items: [
            { label: "Rosario", link: "/devocionario/rosario" },
            {
              label: "Salterio",
              items: [
                { label: "001", link: "/devocionario/salterio/001" },
                { label: "002", link: "/devocionario/salterio/002" },
                { label: "003", link: "/devocionario/salterio/003" },
              ],
            },
            { label: "Adoração", link: "/devocionario/adoracao" },
            { label: "Oracao da manha", link: "/devocionario/oracaomanha" },
            { label: "Angelus", link: "/devocionario/angelus" },
            { label: "Oracao da noite", link: "/devocionario/oracaonoite" },
            {
              label: "Pequeno Oficio de Nossa Senhora",
              items: [
                { label: "Matinas", link: "/devocionario/oficio/matinas" },
                { label: "Vésperas", link: "/devocionario/oficio/vesperas" },
                { label: "Completas", link: "/devocionario/oficio/completas" },
              ],
            },
            {
              label: "Orações",
              items: [
                { label: "Pai nosso", link: "/oracoes/pai-nosso" },
                { label: "Ave Maria", link: "/oracoes/ave-maria" },
                { label: "Glória", link: "/oracoes/gloria" },
                {
                  label: "Ladaínhas",
                  items: [
                    {
                      label: "Coração de Jesus",
                      link: "/oracoes/ladainhas/coracaojesus",
                    },
                    { label: "São José", link: "/oracoes/ladainhas/jose" },
                    { label: "Loreto", link: "/oracoes/ladainhas/loreto" },
                    {
                      label: "Nome Jesus",
                      link: "/oracoes/ladainhas/nomejesus",
                    },
                    {
                      label: "Sangue Jesus",
                      link: "/oracoes/ladainhas/sanguejesus",
                    },
                    {
                      label: "Santa Isabel",
                      link: "/oracoes/ladainhas/isabel",
                    },
                    {
                      label: "Todos os Santos",
                      link: "/oracoes/ladainhas/santos",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Fe",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Catecismo", link: "/fe/catecismo" },
            { label: "Verdades", link: "/fe/verdades" },
            { label: "Juramento", link: "/fe/verdades" },
          ],
        },
        {
          label: "Cãnticos",
          items: [
            {
              label: "Sacros",
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
              label: "Populares",
              items: [
                {
                  label: "Salve Nobre Padroeira",
                  link: "/canticos/Populares/salvenobre",
                },
              ],
            },
          ],
        },
        {
          label: "Ritual",
          items: [
            { label: "Baptismo", link: "/ritual/baptismo" },
            { label: "Confirmação", link: "/ritual/confirmacao" },
            { label: "Matrimónio", link: "/ritual/matrimonio" },
            { label: "Extrema Unção", link: "/ritual/extremauncao" },
            { label: "Requiem", link: "/ritual/requiem" },
            { label: "Penitência", link: "/ritual/penitencia" },
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
