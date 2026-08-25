import type { CalendarEdition, Mass } from "../domain";
import type { Day } from "../day";
import type { MassIndex } from "../observanceManager";
import type { Rubrics } from "./rubrics";

/**
 * Read access to a built calendar, as consumed by concurrency rules.
 */
export interface RuleCalendar {
  get(date: string): Day | undefined;
  findDay(observanceId?: string): [string, Day] | undefined;
}

/**
 * Instruction for moving a mass observance to a new date.
 */
export interface ShiftInstruction {
  date: string; // Target date to move TO (yyyy-MM-dd)
  observances: Mass[]; // The masses to move
  sourceDate?: string; // Where to remove them FROM (if not the current processing day, e.g., for Vigils)
}

/**
 * The structured output of a ConcurrencyRule resolution.
 */
export interface RuleResolution {
  stay: Mass[]; // The list of masses that the rule explicitly kept on the current day (winners)
  shifts: ShiftInstruction[]; // The list of shifts to process
}

export interface ConcurrencyRule {
  applies(observances: Mass[], date: string, calendar: RuleCalendar): boolean;
  resolve(observances: Mass[], date: string, calendar: RuleCalendar): RuleResolution;
}

/**
 * A calendar edition as a first-class bundle of data + rubrics.
 *
 * Each edition supplies its own observance set and its own ordered rule
 * list for concurrency resolution. Rubrical differences between editions
 * (octave suppression, vigil handling, rank tables, movable feasts) are
 * expressed as different data or different rules - never as conditionals
 * inside the generic engine.
 */
export interface CalendarDefinition {
  id: CalendarEdition;
  label: string;
  /** divinum-officium version name this edition corresponds to; keys rankVariants. */
  doVersion: string;
  /** Parent edition this one inherits observances/rules/ranks from. */
  base?: CalendarEdition;
  /** Observances available in this edition (already filtered/tagged). */
  observances: Record<string, Mass>;
  /** Rubrical knobs where editions diverge (typed, DO-sourced values). */
  rubrics: Rubrics;
  /**
   * Optional edition-specific adjustment applied after rank-variant
   * resolution (e.g., Advent ferias promoted from Dec 17-23).
   */
  adjustRank?(mass: Mass, date: string | undefined, precedence: number): number;
  /** Ordered concurrency rules for this edition's rubrics. */
  rules(index: MassIndex, rubrics: Rubrics): ConcurrencyRule[];
}
