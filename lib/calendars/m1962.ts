import { composeObservances1960 } from "./overrides";
import { pre55Calendar } from "./pre55";
import { RUBRICS_1960 } from "./rubrics";
import type { CalendarDefinition } from "./types";

/**
 * The 1962 typical edition calendar, corresponding to divinum-officium's
 * "Rubrics 1960 - 1960". Inherits from pre-55 and declares deltas only:
 * its observance map composes the shared base with the Rubrics 1960
 * override layer (suppressions + proper additions).
 */
export const m1962Calendar: CalendarDefinition = {
  ...pre55Calendar,
  observances: composeObservances1960(),
  id: "62",
  label: "Missal de 1962",
  doVersion: "Rubrics 1960 - 1960",
  base: "pre-55",
  rubrics: RUBRICS_1960,
};
