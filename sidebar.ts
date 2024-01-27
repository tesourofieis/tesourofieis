export const sidebar = [
  {
    label: "Missal",
    items: [
      { label: "Dia", link: "/missal/dia" },
      { label: "Ordo", link: "/missal/ordo" },
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
        label: "Orações Complementares",
        collapsed: true,
        autogenerate: { directory: "missal/complementares" },
      },
    ],
  },
  {
    label: "Devocionario",
    items: [
      { label: "Rosario", link: "/devocionario/rosario" },
      {
        label: "Salterio",
        collapsed: true,
        autogenerate: { directory: "devocionario/salterio" },
      },
      { label: "Adoração", link: "/devocionario/adoracao" },
      {
        label: "Oracões do dia",
        collapsed: true,
        autogenerate: { directory: "devocionario/dia" },
      },
      {
        label: "Pequeno Oficio de Nossa Senhora",
        collapsed: true,
        autogenerate: { directory: "devocionario/oficio" },
      },
      {
        label: "Orações",
        collapsed: true,
        autogenerate: { directory: "devocionario/oracoes" },
      },
    ],
  },
  {
    label: "Fé",
    autogenerate: { directory: "fe" },
  },
  {
    label: "Cãnticos",
    autogenerate: { directory: "canticos" },
    items: [
      {
        label: "Sacros",
        collapsed: true,
        autogenerate: { directory: "populares/sacros" },
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
    autogenerate: { directory: "ritual" },
  },
];
