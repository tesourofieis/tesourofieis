import type { CalendarEdition } from "../domain";

/**
 * Typed rubrics configuration - the knobs where calendar editions genuinely
 * diverge, expressed as data instead of version-string checks.
 *
 * This mirrors divinum-officium's `$version =~ /196/` thresholds (e.g. its
 * occurrence() rank comparisons), but as a typed object owned by each
 * CalendarDefinition. DO remains the source of truth for what the values
 * should be; this file only gives them a home.
 */
export interface Rubrics {
  sundays: {
    /**
     * True under Rubrics 1960: a Sunday colliding with sanctoral feasts
     * keeps precedence and commemorates them under itself
     * (missalemeum rule_2nd_class_sunday). False pre-55, where semidouble
     * Sundays are superseded by duplex feasts via general rank ordering.
     */
    commemoratesFeastsUnder: boolean;
    /**
     * Feasts that take over a Sunday entirely, with no commemoration of
     * the Sunday (missalemeum second_class_feast_no_sunday_commemoration;
     * cf. DO horascommon.pl line ~491).
     */
    feastsTakingOverCompletely: string[];
  };
  /**
   * Advent ferias from Dec 17th-23rd are promoted to this legacy coarse
   * rank (null = no promotion).
   */
  adventFeriasPromotionRank: number | null;
}

/**
 * Divino Afflatu era rubrics (pre-1955). Source: divinum-officium,
 * version "Divino Afflatu - 1954".
 */
export const RUBRICS_1954: Rubrics = {
  sundays: {
    commemoratesFeastsUnder: false,
    feastsTakingOverCompletely: [],
  },
  adventFeriasPromotionRank: 2,
};

/**
 * Rubrics 1960 (1962 typical edition). Source: divinum-officium,
 * version "Rubrics 1960 - 1960".
 */
export const RUBRICS_1960: Rubrics = {
  sundays: {
    commemoratesFeastsUnder: true,
    feastsTakingOverCompletely: ["SANCTI_09_14", "SANCTI_11_09"],
  },
  adventFeriasPromotionRank: 2,
};

export type EditionWithRubrics = CalendarEdition;
