import { parseLocalDate } from "../utils";
import type { Mass } from "../domain";
import { OBSERVANCES } from "../observances";
import { legacyToPrecedence } from "./precedence";
import { buildRules } from "./rules";
import { RUBRICS_1954 } from "./rubrics";
import type { CalendarDefinition } from "./types";

/**
 * Observances exclusive to another edition are excluded here: under that
 * edition's selection they are absent, not alternatives.
 */
function excludeEditionSpecific(
  observances: Record<string, Mass>,
  edition: Mass["calendar"],
): Record<string, Mass> {
  return Object.fromEntries(
    Object.entries(observances).filter(([_, mass]) => mass.calendar !== edition),
  );
}

/**
 * The pre-1955 rubrics calendar.
 *
 * doVersion maps to divinum-officium's "Divino Afflatu - 1954": the last
 * fully pre-55 code of rubrics, from which DO's "Reduced - 1955" and
 * "Rubrics 1960" chains descend. rankVariants keyed to other DO versions
 * (e.g. Tridentine) resolve through the chain when this edition is the leaf.
 */
export const pre55Calendar: CalendarDefinition = {
  id: "pre-55",
  label: "Rubricas pré-55",
  doVersion: "Divino Afflatu - 1954",
  observances: excludeEditionSpecific(OBSERVANCES, "62"),
  rubrics: RUBRICS_1954,
  adjustRank(mass: Mass, date: string, precedence: number): number {
    const promotion = RUBRICS_1954.adventFeriasPromotionRank;
    if (promotion === null || mass.type !== "advent" || mass.weekday === 0 || !date) {
      return precedence;
    }

    const parsed = parseLocalDate(date);
    if (parsed.getMonth() === 11 && parsed.getDate() >= 17 && parsed.getDate() <= 23) {
      return Math.max(precedence, legacyToPrecedence(promotion));
    }
    return precedence;
  },
  rules: buildRules,
};
