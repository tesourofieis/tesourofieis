import { OBSERVANCES } from "../observances";
import { pre55Calendar } from "./pre55";
import { RUBRICS_1960 } from "./rubrics";
import type { CalendarDefinition } from "./types";

/**
 * The 1962 typical edition calendar, corresponding to divinum-officium's
 * "Rubrics 1960 - 1960". Inherits from pre-55 and declares deltas only:
 * observance overrides, rankVariants keyed to "Rubrics 1960", and rule
 * swaps as the divergence catalogue is ported from DO's data.
 */
export const m1962Calendar: CalendarDefinition = {
  ...pre55Calendar,
  // Start from the FULL set (pre-55's map excludes edition-specific
  // entries); suppression is handled per-edition by MassManager.
  observances: OBSERVANCES,
  id: "62",
  label: "Missal de 1962",
  doVersion: "Rubrics 1960 - 1960",
  base: "pre-55",
  rubrics: RUBRICS_1960,
};
