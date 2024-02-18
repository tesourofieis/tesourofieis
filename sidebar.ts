export const sidebar = [
  {
    label: "Missal",
    items: [
      {
        label: "Dia",
        link: "/missal/dia",
        badge: { text: "Varia com dia", variant: "note" },
      },
      {
        label: "Ordo",
        link: "/missal/ordo",

        badge: { text: "Varia", variant: "note" },
      },
      {
        label: "Advento",
        collapsed: true,
        autogenerate: { directory: "missal/advento" },
      },
      {
        label: "Natal",
        collapsed: true,
        autogenerate: { directory: "missal/natal" },
      },
      {
        label: "Epifania",
        collapsed: true,
        autogenerate: { directory: "missal/epifania" },
      },
      {
        label: "Quaresma",
        collapsed: true,
        autogenerate: { directory: "missal/quaresma" },
        badge: { text: "Tempo presente", variant: "tip" },
      },
      {
        label: "Páscoa",
        collapsed: true,
        autogenerate: { directory: "missal/pascoa" },
      },
      {
        label: "Pentecostes",
        collapsed: true,
        autogenerate: { directory: "missal/pentecostes" },
      },
      {
        label: "Santos",
        collapsed: true,
        autogenerate: { directory: "missal/santos" },
      },
      {
        label: "Comum",
        collapsed: true,
        autogenerate: { directory: "missal/comum" },
      },
      {
        label: "Votivas",
        collapsed: true,
        autogenerate: { directory: "missal/votivas" },
      },
      {
        label: "Orações Diversas",
        collapsed: true,
        autogenerate: { directory: "missal/oracoesdiversas" },
      },
      {
        label: "Prefácios",
        collapsed: true,
        autogenerate: { directory: "missal/prefacios" },
      },
      {
        label: "Orações Preliminares",
        link: "/missal/oracoespreliminares",
      },
      {
        label: "Paramentação do Sacerdote",
        link: "/missal/paramentacaosacerdote",
      },
      {
        label: "Orações Complementares",
        link: "/missal/oracoescomplementares",
      },
      {
        label: "Orações para antes da Comunhão",
        link: "/missal/oracoesantescomunhao",
      },
      {
        label: "Orações para depois da Comunhão",
        link: "/missal/oracoesdepoiscomunhao",
      },
      {
        label: "Asperges me",
        link: "/missal/aspergesme",
      },
      {
        label: "Vidi Aquam",
        link: "/missal/vidiaquam",
      },
      {
        label: "Orações Leoninas",
        link: "/missal/oracoesleoninas",
      },
      {
        label: "Ofício dos Agonizantes",
        link: "/missal/oficioagonizantes",
      },
      {
        label: "Ofício dos Defuntos",
        link: "/missal/oficiodefuntos",
      },
    ],
  },
  {
    label: "Devocionario",
    items: [
      {
        label: "Introdução",
        link: "/devocionario/introducao",
        badge: { text: "Novo", variant: "success" },
      },
      { label: "Adoração", link: "/devocionario/adoracao" },
      { label: "Rosario", link: "/devocionario/rosario" },
      {
        label: "Via Sacra",
        link: "/devocionario/viasacra",
        badge: { text: "Novo", variant: "success" },
      },
      {
        label: "Antífonas de Nossa Senhora",
        collapsed: true,
        autogenerate: { directory: "devocionario/antifonas" },
      },
      {
        label: "Ladaínhas",
        collapsed: true,
        autogenerate: { directory: "devocionario/ladainhas" },
        badge: { text: "Novo", variant: "success" },
      },
      {
        label: "Oracões do dia",
        collapsed: true,
        items: [
          {
            label: "Bençãos",
            link: "/devocionario/dia/bencaos",
            badge: { text: "Novo", variant: "success" },
          },
          { label: "Oração da Manhã", link: "/devocionario/dia/oracaomanha" },
          { label: "Angelus", link: "/devocionario/dia/angelus" },
          { label: "Oração da Noite", link: "/devocionario/dia/oracaonoite" },
        ],
      },
      {
        label: "Orações Diversas",
        collapsed: true,
        autogenerate: { directory: "devocionario/oracoes" },
      },
      {
        label: "Pequeno Oficio de Nossa Senhora",
        collapsed: true,
        items: [
          { label: "Matinas", link: "/devocionario/oficio/matinas" },
          { label: "Laudes", link: "/devocionario/oficio/laudes" },
          { label: "Prima", link: "/devocionario/oficio/prima" },
          { label: "Terça", link: "/devocionario/oficio/terca" },
          { label: "Sexta", link: "/devocionario/oficio/sexta" },
          { label: "Noa", link: "/devocionario/oficio/noa" },
          { label: "Vésperas", link: "/devocionario/oficio/vesperas" },
          { label: "Completas", link: "/devocionario/oficio/completas" },
        ],
      },
      {
        label: "Salterio",
        collapsed: true,
        autogenerate: { directory: "devocionario/salterio" },
      },
    ],
  },
  {
    label: "Fé",
    items: [
      {
        label: "Catecismo",
        link: "/fe/catecismo",
      },
      {
        label: "Verdades da Fé",
        link: "/fe/verdades",
      },
      {
        label: "Juramento anti-modernista",
        link: "/fe/juramento",
        badge: { text: "Novo", variant: "success" },
      },
    ],
  },
  {
    label: "Cânticos",
    items: [
      {
        label: "Sacros",
        collapsed: true,
        autogenerate: { directory: "canticos/sacros" },
      },
      {
        label: "Populares",
        collapsed: true,
        autogenerate: { directory: "canticos/populares" },
        badge: { text: "Novo", variant: "success" },
      },
    ],
  },
  {
    label: "Ritual",
    collapsed: true,
    autogenerate: { directory: "ritual" },
  },
];
