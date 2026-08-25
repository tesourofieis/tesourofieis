import { parseLocalDate } from "../utils";
import type { Mass } from "../domain";
import { OBSERVANCES } from "../observances";
import { legacyToPrecedence } from "./precedence";
import { buildRules } from "./rules";
import { RUBRICS_1954 } from "./rubrics";
import type { CalendarDefinition } from "./types";

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
  observances: OBSERVANCES,
  rubrics: RUBRICS_1954,
  adjustRank(mass: Mass, date: string, precedence: number): number {
    // The Semiduplex grades of the Epiphany-octave week hold only through
    // Jan 12; from the Commemoration of the Baptism (Jan 13) the same
    // tempora keys are plain ferias again.
    if (
      mass.id?.startsWith("TEMPORA_EPI1_") &&
      mass.id !== "TEMPORA_EPI1_0A" &&
      precedence >= 5.6 &&
      date
    ) {
      const parsed = parseLocalDate(date);
      if (parsed.getMonth() === 0 && parsed.getDate() >= 13) {
        return legacyToPrecedence(mass.rank);
      }
    }

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
