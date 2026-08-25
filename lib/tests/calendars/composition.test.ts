import { describe, expect, test } from "bun:test";
import { buildRules } from "../../calendars/rules";
import { RUBRICS_1954, RUBRICS_1960 } from "../../calendars/rubrics";
import type { Rubrics } from "../../calendars/rubrics";
import { getMassIndex } from "../../observanceManager";

/**
 * Composition pinning: the exact rule list per edition, order included.
 *
 * Any change to buildRules() output must update these expectations
 * deliberately - this is the guard against accidentally changing one
 * edition's behavior while "just fixing" another.
 */

function ruleNames(rules: ReturnType<typeof buildRules>): string[] {
  return rules.map((r) => r.constructor.name);
}

const SHARED_ORDER = [
  "NativityMultipleMassesRule",
  "AllSoulsRule",
  "NativityVigilRule",
  "NativityOctaveFeriaRule",
  "StMatthiasRule",
  "Feb27Rule",
  "SevenSorrowsRule",
  "AdventEmberDayRule",
  "FirstClassConflictRule",
  "SecondClassConflictRule",
  "BmvSaturdayRule",
  "AnnunciationTransferredRule",
  "VigilSundayOmissionRule",
];

describe("rule composition pinning", () => {
  const masses55 = getMassIndex("pre-55");
  const masses62 = getMassIndex("62");

  test("pre-55 rubrics compose the shared list without a Sunday precedence rule", () => {
    expect(ruleNames(buildRules(masses55, RUBRICS_1954))).toEqual([
      ...SHARED_ORDER,
      // SundayPrecedenceRule is not installed: pre-55 semidouble Sundays
      // are superseded via general rank ordering instead.
      "GeneralRankRule",
    ]);
  });

  test("Rubrics 1960 composes the shared list plus the Sunday precedence rule", () => {
    expect(ruleNames(buildRules(masses62, RUBRICS_1960))).toEqual([
      ...SHARED_ORDER,
      "SundayPrecedenceRule",
      "GeneralRankRule",
    ]);
  });

  test("the Sunday precedence rule is dropped when its rubrics knob is off", () => {
    const off: Rubrics = {
      sundays: {
        commemoratesFeastsUnder: false,
        feastsTakingOverCompletely: [],
      },
      adventFeriasPromotionRank: null,
    };
    expect(ruleNames(buildRules(masses55, off))).not.toContain("SundayPrecedenceRule");
  });

  test("each edition's definition carries its DO-sourced rubrics", () => {
    const { CALENDARS } = require("../../calendars") as typeof import("../../calendars");

    expect(CALENDARS["pre-55"].doVersion).toBe("Divino Afflatu - 1954");
    expect(CALENDARS["pre-55"].rubrics.sundays.commemoratesFeastsUnder).toBe(false);

    expect(CALENDARS["62"].doVersion).toBe("Rubrics 1960 - 1960");
    expect(CALENDARS["62"].base).toBe("pre-55");
    expect(CALENDARS["62"].rubrics.sundays.commemoratesFeastsUnder).toBe(true);
    expect(CALENDARS["62"].rubrics.sundays.feastsTakingOverCompletely).toEqual([
      "SANCTI_09_14",
      "SANCTI_11_09",
    ]);
  });

  test("definitions resolve rules through their own rubrics", () => {
    const { CALENDARS } = require("../../calendars") as typeof import("../../calendars");
    for (const definition of Object.values(CALENDARS)) {
      const rules = definition.rules(getMassIndex(definition.id), definition.rubrics);
      expect(rules.length).toBeGreaterThan(10);
      expect(rules.at(-1)?.constructor.name).toBe("GeneralRankRule");
    }
  });
});
