export const sidebar = [
  {
    label: "Missal",
    items: [
      {
        label: "Ordo",
        link: "/missal/ordo",
        badge: { text: "Variável" },
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
        label: "Pre-Quaresma",
        collapsed: true,
        autogenerate: { directory: "missal/pre-quaresma" },
      },
      {
        label: "Quaresma",
        collapsed: true,
        autogenerate: { directory: "missal/quaresma" },
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
  { label: "Calendário", link: "/calendario" },
  {
    label: "Devocionario",
    items: [
      {
        label: "Introdução",
        link: "/devocionario/introducao",
      },
      { label: "Adoração", link: "/devocionario/adoracao" },
      { label: "Rosario", link: "/devocionario/rosario" },
      {
        label: "Via Sacra",
        link: "/devocionario/viasacra",
      },
      {
        label: "Antífonas de Nossa Senhora",
        collapsed: true,
        autogenerate: { directory: "devocionario/antifonas" },
      },
      {
        label: "Ladainhas",
        collapsed: true,
        autogenerate: { directory: "devocionario/ladainhas" },
      },
      {
        label: "Oracões do dia",
        collapsed: true,
        items: [
          {
            label: "Bençãos",
            link: "/devocionario/dia/bencaos",
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
      {
        label: "Novenas",
        link: "/devocionario/novenas",
        badge: { text: "Novo" },
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
      },
    ],
  },
  {
    label: "Ritual",
    collapsed: true,
    items: [
      {
        label: "Baptismo",
        link: "/ritual/baptismo",
      },
      {
        label: "Confirmação",
        link: "/ritual/confirmacao",
      },
      {
        label: "Extrema-unção",
        link: "/ritual/extremauncao",
      },
      {
        label: "Funeral",
        link: "/ritual/requiem",
      },
      {
        label: "Matrimónio",
        link: "/ritual/matrimonio",
      },
      {
        label: "Penitência",
        link: "/ritual/penitencia",
      },
      {
        label: "Viático",
        link: "/ritual/viatico",
      },
    ],
  },
];
