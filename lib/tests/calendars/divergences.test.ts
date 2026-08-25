import { describe, expect, test } from "bun:test";
import { RANK_DIVERGENCES, SANCTORAL_DIVERGENCES } from "../../calendars/divergences";
import { computeRankFor } from "../../calendars";
import { legacyToPrecedence, precedenceToLegacyRank } from "../../calendars/precedence";
import { OBSERVANCES } from "../../observances";

describe("sanctoral divergence catalogue", () => {
  test("catalogue is loaded and non-trivial", () => {
    expect(SANCTORAL_DIVERGENCES.length).toBeGreaterThanOrEqual(20);
  });

  test("every entry differs between editions", () => {
    for (const d of SANCTORAL_DIVERGENCES) {
      const a = d.pre55 ? `${d.pre55.name}@${d.pre55.rank}` : "null";
      const b = d.m1962 ? `${d.m1962.name}@${d.m1962.rank}` : "null";
      expect(`${d.date}: ${a} vs ${b}`).not.toEqual(`${d.date}: ${b} vs ${a}`);
    }
  });

  test("May 1st: Philip & James (pre-55, II cl.) vs St Joseph the Worker ('62, I cl.)", () => {
    const may1 = SANCTORAL_DIVERGENCES.find((d) => d.date === "05-01")!;
    expect(may1.pre55!.name).toContain("Philippi et Jacobi");
    expect(precedenceToLegacyRank(may1.pre55!.rank)).toBe(2);
    expect(may1.m1962!.name).toBe("S. Joseph Opificis");
    // DO kalendar rank 6 -> I class under Rubrics 1960.
    expect(precedenceToLegacyRank(may1.m1962!.rank)).toBe(1);
  });

  test("octave-day divergences are captured (All Saints octave removed in '62)", () => {
    const nov8 = SANCTORAL_DIVERGENCES.find((d) => d.date === "11-08")!;
    expect(nov8.pre55!.name).toContain("Octava Omnium Sanctorum");
    expect(nov8.m1962!.name).toContain("Quatuor Coronatorum");
  });

  test("Christmas octave reordering under '62 is captured", () => {
    const dec28 = SANCTORAL_DIVERGENCES.find((d) => d.date === "12-28")!;
    expect(dec28.pre55!.name).toContain("Innoc");
    expect(dec28.m1962!.name).toContain("infra octavam Nativitatis");
  });

  test("our observances cover both sides of every divergence date", () => {
    // The worklist test: any uncovered date means edition data still missing.
    const uncovered: string[] = [];

    for (const d of SANCTORAL_DIVERGENCES) {
      const [month, day] = d.date.split("-").map(Number);
      const entriesOnDate = Object.values(OBSERVANCES).filter(
        (m) => m.month === month && m.day === day && !m.local,
      );

      if (!entriesOnDate.length && (d.pre55 || d.m1962)) {
        uncovered.push(d.date);
      }
    }

    expect(uncovered).toEqual([]);
  });
});

describe("rank divergence catalogue", () => {
  test("catalogue covers the known edition-graded feasts", () => {
    expect(RANK_DIVERGENCES.length).toBeGreaterThanOrEqual(10);
  });

  test("every variant set has a default and a Rubrics-1960 entry", () => {
    for (const r of RANK_DIVERGENCES) {
      expect(
        r.variants.some((v) => v.rubrics === "*"),
        `${r.date} missing default`,
      ).toBe(true);
      expect(
        r.variants.some((v) => v.rubrics === "Rubrics 1960 - 1960"),
        `${r.date} missing Rubrics 1960`,
      ).toBe(true);
      const precs = new Set(r.variants.map((v) => v.precedence));
      expect(precs.size).toBeGreaterThan(1);
    }
  });

  test("portable: existing observances on divergence dates carry the ported variants", () => {
    // Worklist: when an observance exists for a divergence date, its
    // rankVariants must include both editions' grades.
    const unported: string[] = [];

    for (const r of RANK_DIVERGENCES) {
      const [month, day] = r.date.split("-").map(Number);
      const entries = Object.values(OBSERVANCES).filter(
        (m) => m.month === month && m.day === day && !m.local && !m.outro,
      );

      for (const entry of entries) {
        const hasDefault = entry.rankVariants?.some((v) => v.rubrics === "*");
        const has62 = entry.rankVariants?.some((v) => v.rubrics === "Rubrics 1960 - 1960");
        if (!hasDefault || !has62) unported.push(entry.id);
      }
    }

    expect(unported).toEqual([]);
  });

  test("Exaltation of the Holy Cross resolves II class in '62, duplex majus pre-55", () => {
    const cross = OBSERVANCES.SANCTI_09_14!;
    // DO is authoritative here: our legacy data said II class, DO's
    // [Rank] says Duplex majus pre-55 - the port corrects that.
    expect(computeRankFor("pre-55", cross, "2025-09-14")).toBe(3);
    expect(computeRankFor("62", cross, "2025-09-14")).toBe(2);
    expect(cross.rankVariants?.find((v) => v.rubrics === "Rubrics 1960 - 1960")?.precedence).toBe(
      5.5,
    );
  });

  test("St Patrick drops a grade under '62 rubrics", () => {
    const patrick = OBSERVANCES.SANCTI_03_17!;
    expect(computeRankFor("pre-55", patrick, "2025-03-17")).toBe(3);
    expect(computeRankFor("62", patrick, "2025-03-17")).toBe(4);
  });
});
