import type { MassMap } from "../../domain";

/** Chaves sancti fora da sequência mensal (locais históricas do conjunto). */
export const SANCTI_EXTRA: MassMap = {
  SANCTI_10_DUR: {
    flexibility: "santos",
    rankVariants: [
        { rubrics: "*", name: "Duplex I classis", precedence: 6.5 },
     ],
    id: "SANCTI_10_DUR",
    name: "Cristo Rei",
    color: "w",
    link: "missal/santos/10-dur",
    type: "sancti",
    category: "santos",
    novena: true,
  },
};
