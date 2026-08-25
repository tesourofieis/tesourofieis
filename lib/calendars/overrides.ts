import type { Mass, MassMap } from "../domain";
import { OBSERVANCES } from "../observances";

/**
 * Edition deltas for Rubrics 1960 (1962 typical edition).
 *
 * The shared observance modules describe the Divino Afflatu reality.
 * Everything that exists only in relation to Rubrics 1960 lives here -
 * never as flags inside the shared buckets. divinum-officium remains the
 * source of truth for values; rankVariants stay in the base entries
 * because a [Rank] section list is DO's native multi-rubrica datum.
 */

/** Observances that do not exist under Rubrics 1960. */
const SUPPRESSED: Record<string, true> = {
  "SANCTI_01_02": true,
  "SANCTI_01_03": true,
  "SANCTI_01_04": true,
  "SANCTI_01_05": true,
  "SANCTI_05_01": true,
  "SANCTI_07_03": true,
  "SANCTI_07_24": true,
  "SANCTI_08_09": true,
  "SANCTI_08_18_OITAVA_ASSUNCAO": true,
  "SANCTI_12_10_OITAVA_IMACULADA": true,
  "SANCTI_12_29": true,
  "TEMPORA_QUAD6_4": true,
  "TEMPORA_QUAD6_5": true,
  "TEMPORA_QUAD6_6": true,
};

/** Observances proper to Rubrics 1960, spliced after their original neighbour. */
const ADDITIONS: readonly { after: string; mass: Mass }[] = [
  { after: "SANCTI_05_01", mass: {
    flexibility: "santos",
    id: "SANCTI_05_01_1962",
    name: "S. José, Operário",
    rankVariants: [
    { rubrics: "*", name: "Duplex II classis", precedence: 5 },
    ],
    color: "r",
    calendar: "62",
    outro: true,
    link: "missal/santos/05-01-1962",
    type: "sancti",
    category: "santos",
    month: 5,
    day: 1,
} },
  { after: "SANCTI_05_10", mass: {
    flexibility: "santos",
    id: "SANCTI_05_11",
    name: "S. Filipe e S. Tiago, Apóstolos",
    rankVariants: [
    { rubrics: "*", name: "Duplex II classis", precedence: 5 },
    ],
    color: "r",
    calendar: "62",
    outro: true,
    link: "missal/santos/05-01",
    type: "sancti",
    category: "santos",
    month: 5,
    day: 11,
} },
  { after: "SANCTI_06_17_PORTUGAL", mass: {
    flexibility: "santos",
    id: "SANCTI_06_17_1962",
    name: "S. Gregório Barbádico, Bispo e Confessor",
    rankVariants: [
    { rubrics: "*", name: "Duplex", precedence: 3.5 },
    ],
    color: "w",
    link: "missal/santos/06-18",
    type: "sancti",
    calendar: "62",
    category: "santos",
    month: 6,
    day: 17,
    outro: true,
} },
  { after: "SANCTI_07_03", mass: {
    flexibility: "santos",
    id: "SANCTI_07_03_OUTRO_1962",
    name: "S. Ireneu, B. e Mártir",
    rankVariants: [
    { rubrics: "*", name: "Duplex", precedence: 3.5 },
    ],
    color: "r",
    calendar: "62",
    link: "missal/santos/06-28-outro",
    outro: true,
    type: "sancti",
    category: "santos",
    month: 7,
    day: 3,
} },
  { after: "SANCTI_07_24", mass: {
    // Rubrics 1960: St Christina on Jul 24th, replacing the Vigil of
    // St James (DO Kalendaria 1960.txt 07-24r). Proper text pending -
    // links to the Common of Virgin Martyrs meanwhile.
    flexibility: "santos",
    id: "SANCTI_07_24_1962",
    name: "S. Cristina, Virgem e Mártir",
    rankVariants: [
    { rubrics: "*", name: "Simplex", precedence: 1.5 },
    ],
    color: "r",
    link: "missal/comum/17virgensmartires1",
    type: "sancti",
    calendar: "62",
    category: "santos",
    month: 7,
    day: 24,
} },
  { after: "SANCTI_08_08", mass: {
    flexibility: "santos",
    id: "SANCTI_08_08_OUTRO_1962",
    name: "S. João Maria Vianney, Confessor",
    rankVariants: [
    { rubrics: "*", name: "Duplex", precedence: 3.5 },
    ],
    color: "w",
    calendar: "62",
    link: "missal/santos/08-09",
    outro: true,
    type: "sancti",
    category: "santos",
    month: 8,
    day: 8,
} },
  { after: "SANCTI_08_17", mass: {
    flexibility: "santos",
    id: "SANCTI_08_18",
    name: "S. Agapito, Mártir",
    rankVariants: [
    { rubrics: "*", name: "Simplex", precedence: 1.5 },
    ],
    color: "w",
    link: "missal/santos/08-18",
    type: "sancti",
    category: "santos",
    month: 8,
    day: 18,
} },
  { after: "SANCTI_10_08", mass: {
    flexibility: "santos",
    id: "SANCTI_10_08_OUTRO_1962",
    name: "S. S. Sérgio, Baco e Outros, Mártires",
    rankVariants: [
    { rubrics: "*", name: "Simplex", precedence: 1.5 },
    ],
    color: "r",
    calendar: "62",
    link: "missal/santos/10-07-outro-2",
    outro: true,
    type: "sancti",
    category: "santos",
    month: 10,
    day: 8,
} },
  { after: "SANCTI_12_09", mass: {
    flexibility: "santos",
    id: "SANCTI_12_10",
    name: "S. Melquíades, Papa e Mártir",
    rankVariants: [
    { rubrics: "*", name: "Simplex", precedence: 1.5 },
    ],
    color: "r",
    link: "missal/santos/12-10",
    type: "sancti",
    category: "santos",
    month: 12,
    day: 10,
} },
  { after: "TEMPORA_QUAD6_4", mass: {
    flexibility: "tempora",
    id: "TEMPORA_QUAD6_4_1962",
    name: "Quinta-feira Santa",
    rankVariants: [
    { rubrics: "*", name: "Duplex I classis", precedence: 6.5 },
    ],
    color: "w",
    link: "missal/quaresma/quad6-4-1962",
    type: "pre-lent-to-pentcost",
    category: "quaresma",
    weekday: 4,
    week: 6,
    calendar: "62",
    outro: true,
} },
  { after: "TEMPORA_QUAD6_5", mass: {
    flexibility: "tempora",
    id: "TEMPORA_QUAD6_5_1962",
    name: "Sexta-feira Santa",
    rankVariants: [
    { rubrics: "*", name: "Duplex I classis", precedence: 6.5 },
    ],
    color: "b",
    link: "missal/quaresma/quad6-5-1962",
    type: "pre-lent-to-pentcost",
    category: "quaresma",
    weekday: 5,
    week: 6,
    calendar: "62",
    outro: true,
} },
  { after: "TEMPORA_QUAD6_6", mass: {
    flexibility: "tempora",
    id: "TEMPORA_QUAD6_6_1962",
    name: "Sábado Santo",
    rankVariants: [
    { rubrics: "*", name: "Duplex I classis", precedence: 6.5 },
    ],
    color: "vw",
    link: "missal/quaresma/quad6-6-1962",
    type: "pre-lent-to-pentcost",
    category: "quaresma",
    weekday: 6,
    week: 6,
    calendar: "62",
    outro: true,
} },
  { after: "SANCTI_05_03", mass: {
    flexibility: "santos",
    id: "SANCTI_05_03_1962",
    name: "S. Alexandre, Papa e Mártir",
    rankVariants: [
    { rubrics: "*", name: "Duplex", precedence: 3.5 },
    ],
    color: "r",
    link: "missal/santos/05-03-outro",
    calendar: "62",
    type: "sancti",
    category: "santos",
    month: 5,
    day: 3,
} },
  { after: "SANCTI_08_09", mass: {
    flexibility: "santos",
    id: "SANCTI_08_09_OUTRO_1962",
    name: "Vigília de S. Lourenço, Mártir",
    rankVariants: [
    { rubrics: "*", name: "Duplex", precedence: 3.5 },
    ],
    color: "r",
    link: "missal/santos/08-09-outro",
    calendar: "62",
    type: "sancti",
    category: "santos",
    month: 8,
    day: 9,
} },
  { after: "SANCTI_11_29", mass: {
    flexibility: "santos",
    id: "SANCTI_11_29_1962",
    name: "S. Saturnino, Mártir",
    rankVariants: [
    { rubrics: "*", name: "Simplex", precedence: 1.5 },
    ],
    color: "r",
    link: "missal/santos/11-29-outro",
    calendar: "62",
    type: "sancti",
    category: "santos",
    month: 11,
    day: 29,
} },
];

/**
 * Composes the effective observance map for Rubrics 1960 from the shared
 * base. Suppressed entries keep their marker so MassManager filters them
 * while rules can still resolve them by id; additions land at their
 * historical positions, keeping index ordering and tie-breaks identical.
 */
export function composeObservances1960(base: Record<string, Mass> = OBSERVANCES): MassMap {
  const out: MassMap = {};
  const pending = new Map(ADDITIONS.map((a) => [a.after, a]));
  const anchored = new Set<string>();

  for (const [key, mass] of Object.entries(base)) {
    out[key] = key in SUPPRESSED ? { ...mass, suppressedIn: ["62"] } : mass;

    const addition = pending.get(key);
    if (addition) {
      out[addition.mass.id] = addition.mass;
      anchored.add(addition.mass.id);
    }
  }

  // Safety net: anchors always resolve today; leftovers go to the end.
  for (const addition of ADDITIONS) {
    if (!anchored.has(addition.mass.id)) out[addition.mass.id] = addition.mass;
  }

  return out;
}
