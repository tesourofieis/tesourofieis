import type { CalendarEdition, Mass } from "../domain";
import { m1962Calendar } from "./m1962";
import { precedenceToLegacyRank, resolvePrecedence } from "./precedence";
import { pre55Calendar } from "./pre55";
import type { CalendarDefinition } from "./types";

export const CALENDARS = {
  "pre-55": pre55Calendar,
  "62": m1962Calendar,
} satisfies Record<CalendarEdition, CalendarDefinition>;

/**
 * Inheritance chain for an edition, root first (DO's `base` column in
 * Tabulae/data.txt): each definition only declares deltas over its base.
 */
export function getChain(edition: CalendarEdition): CalendarDefinition[] {
  const chain: CalendarDefinition[] = [];
  let current: CalendarDefinition | undefined = CALENDARS[edition];

  while (current) {
    chain.unshift(current);
    current = current.base ? CALENDARS[current.base] : undefined;
  }
  return chain;
}

/**
 * Effective rank of an observance on a date under an edition: DO-scale
 * precedence resolved through the chain, then adjusted per edition
 * (e.g. Advent ferias), then mapped back to the legacy coarse rank the
 * engine compares today.
 */
export function computeRankFor(
  edition: CalendarEdition,
  mass: Mass,
  date?: string,
): number {
  // Ranks outside the legacy 1-4 scale are meaningful data (e.g. 0);
  // pass them through untouched unless the entry declares variants.
  const hasVariants = Boolean(mass.rankVariants?.length);
  if (!hasVariants && !(mass.rank >= 1 && mass.rank <= 4)) {
    return mass.rank;
  }
  return precedenceToLegacyRank(computePrecedenceFor(edition, mass, date));
}

/**
 * Fine-grained DO-scale precedence of an observance on a date under an
 * edition: rank variants resolved through the chain, then per-edition
 * adjustments (e.g. Advent ferias).
 */
export function computePrecedenceFor(
  edition: CalendarEdition,
  mass: Mass,
  date?: string,
): number {
  const chain = getChain(edition);
  let precedence = resolvePrecedence(chain, mass);

  for (const definition of [...chain].reverse()) {
    if (definition.adjustRank) {
      precedence = definition.adjustRank(mass, date, precedence);
    }
  }

  return precedence;
}

export function getCalendarDefinition(edition: CalendarEdition): CalendarDefinition {
  const definition = CALENDARS[edition];
  if (!definition) {
    throw new Error(`Unknown calendar edition: ${edition}`);
  }
  return definition;
}

export type { CalendarDefinition };
