import { describe, expect, test } from "bun:test";
import type { Mass } from "../../domain";
import { OBSERVANCES } from "../../observances";
import { CALENDARS, computeRankFor, getChain } from "../../calendars";
import {
  legacyToPrecedence,
  precedenceToLegacyRank,
  resolvePrecedence,
  PRECEDENCE,
} from "../../calendars/precedence";

const mass = (overrides: Partial<Mass>): Mass =>
  ({
    flexibility: "santos",
    id: "TEST",
    name: "Test",
    rank: 3,
    color: "w",
    link: "test",
    type: "sancti",
    category: "santos",
    ...overrides,
  }) as Mass;

describe("precedence scale", () => {
  test("legacy ranks map monotonically onto DO precedence", () => {
    expect(legacyToPrecedence(1)).toBeGreaterThan(legacyToPrecedence(2));
    expect(legacyToPrecedence(2)).toBeGreaterThan(legacyToPrecedence(3));
    expect(legacyToPrecedence(3)).toBeGreaterThan(legacyToPrecedence(4));
  });

  test("legacy rank survives a round trip through the DO scale", () => {
    for (const rank of [1, 2, 3, 4]) {
      expect(precedenceToLegacyRank(legacyToPrecedence(rank))).toBe(rank);
    }
  });

  test("DO reference values map to the expected legacy class", () => {
    // Ported from divinum-officium [Rank] sections.
    expect(precedenceToLegacyRank(6.1)).toBe(1); // St Joseph, DA-1954
    expect(precedenceToLegacyRank(6)).toBe(1); // Feria privilegiata / I cl.
    expect(precedenceToLegacyRank(5)).toBe(2); // Duplex II classis
    expect(precedenceToLegacyRank(PRECEDENCE.SEMIDUPLEX)).toBe(3);
    expect(precedenceToLegacyRank(PRECEDENCE.SIMPLEX)).toBe(4);
  });
});

describe("edition inheritance chain", () => {
  test("pre-55 is the chain root", () => {
    expect(getChain("pre-55")).toEqual([CALENDARS["pre-55"]]);
  });

  test("62 inherits from pre-55", () => {
    expect(getChain("62")).toEqual([CALENDARS["pre-55"], CALENDARS["62"]]);
  });
});

describe("resolvePrecedence", () => {
  test("entries without variants fall back to their static rank", () => {
    const m = mass({ rank: 2 });
    expect(resolvePrecedence(getChain("pre-55"), m)).toBe(legacyToPrecedence(2));
  });

  test("* variant acts as the default [Rank] section", () => {
    const stJoseph = OBSERVANCES.SANCTI_03_19!;
    expect(stJoseph.rankVariants?.[0]?.rubrics).toBe("*");
    expect(resolvePrecedence(getChain("pre-55"), stJoseph)).toBe(6.1);
  });

  test("leaf edition overrides inherited default (St Joseph: 1962 rubrics)", () => {
    const stJoseph = OBSERVANCES.SANCTI_03_19!;
    // Both are Duplex I classis, but on DO's scale they differ:
    // 6.1 under Divino Afflatu - 1954 vs 6 under Rubrics 1960.
    expect(resolvePrecedence(getChain("pre-55"), stJoseph)).toBe(6.1);
    expect(resolvePrecedence(getChain("62"), stJoseph)).toBe(6);
  });
});

describe("computeRankFor", () => {
  const stJoseph = OBSERVANCES.SANCTI_03_19!;

  test("resolves rank variants per edition", () => {
    expect(computeRankFor("pre-55", stJoseph, "2024-03-19")).toBe(1);
    expect(computeRankFor("62", stJoseph, "2024-03-19")).toBe(1);
  });

  test("passes through ranks outside the legacy 1-4 scale untouched", () => {
    const votive = mass({ rank: 0 });
    expect(computeRankFor("pre-55", votive, "2024-05-04")).toBe(0);
    expect(computeRankFor("62", votive, "2024-05-04")).toBe(0);
  });

  test("promotes Advent ferias from Dec 17-23 to II class in both editions", () => {
    const adventFeria = OBSERVANCES.TEMPORA_ADV3_3!;
    expect(adventFeria.type).toBe("advent");
    expect(adventFeria.weekday).not.toBe(0);

    expect(computeRankFor("pre-55", adventFeria, "2024-12-20")).toBe(2);
    expect(computeRankFor("62", adventFeria, "2024-12-20")).toBe(2);
    // Outside the promotion window the DA grade applies (Duplex II classis).
    expect(computeRankFor("pre-55", adventFeria, "2024-12-05")).toBe(2);
  });

  test("never promotes Advent Sundays", () => {
    const adventSunday = OBSERVANCES.TEMPORA_ADV3_0!;
    expect(adventSunday.weekday).toBe(0);
    expect(computeRankFor("pre-55", adventSunday, "2024-12-22")).toBe(1); // Semiduplex privilegiatum
  });
});
