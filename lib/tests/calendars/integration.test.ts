import { describe, expect, test } from "bun:test";
import { computeRankFor } from "../../calendars";
import { RANK_DIVERGENCES, SANCTORAL_DIVERGENCES } from "../../calendars/divergences";
import { precedenceToLegacyRank } from "../../calendars/precedence";
import { getCalendar, getCalendarDay } from "../../getCalendar";
import { OBSERVANCES } from "../../observances";

const YEAR = 2026;

function shiftDate(date: string, days: number): string {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

describe("merged selection integrity", () => {
  test("both editions resolve every day of the year", () => {
    for (const edition of ["pre-55", "62"] as const) {
      const days = getCalendar(YEAR, edition);
      expect(days).toHaveLength(365);
      expect(new Set(days.map((d) => d.date)).size).toBe(365);
    }
  });
});

describe("edition differences match the DO divergence catalogue", () => {
  /**
   * Worklist: every catalogue date must produce different offices under
   * the two editions once ported. Dates still identical are listed here
   * and should shrink to zero as the divergence port continues.
   */
  /**
   * Fully ported: no dates remain in this set. Jul 24th under '62
   * currently falls back to the B.M.V. Saturday office because St
   * Christina has no observance entry yet (data gap, tracked below).
   */
  const NOT_YET_PORTED = new Set<string>([]);

  /**
   * Catalogue entries that are legitimately identical under our dataset:
   * our observances follow the DA-era Portuguese missal, which already
   * includes feasts DO's 1570-based kalendar lacks, or the divergence is
   * name-only / within-class (invisible until rules compare fine-grained
   * precedences).
   */
  const SAME_IN_OUR_DATASET = new Set([
    // Name-only or within-class kalendar changes.
    "08-16",
    "10-07",
    "12-13",
    "12-30",
    // Our entry already carries the merged (post-1954) form on this date.
    "07-21",
    "08-01",
    "10-23",
    // Both editions keep the feast commemorated under the Sunday
    // (missalemeum rule_2nd_class_sunday semantics apply to both here).
    "01-18",
    "01-25",
    "06-28",
    "08-23",
    "11-08",
    "11-29",
    "12-28",
  ]);

  test("each sanctoral divergence date yields different calendars per edition", () => {
    const mismatches: string[] = [];

    for (const d of SANCTORAL_DIVERGENCES) {
      const date = `${YEAR}-${d.date}`;
      const pre55 = getCalendarDay(date, "pre-55");
      const m1962 = getCalendarDay(date, "62");

      const same =
        JSON.stringify(pre55?.mass.map((m) => [m.id, m.rank])) ===
        JSON.stringify(m1962?.mass.map((m) => [m.id, m.rank]));

      if (same && !NOT_YET_PORTED.has(d.date) && !SAME_IN_OUR_DATASET.has(d.date)) {
        mismatches.push(d.date);
      }
    }

    expect(mismatches).toEqual([]);
  });

  test("ported dates reflect the catalogue's edition-specific feasts", () => {
    const cases = [
      { date: "01-18", id: "SANCTI_01_18", edition: "pre-55" as const },
      { date: "04-28", id: "SANCTI_04_28", edition: "pre-55" as const },
      { date: "05-11", id: "SANCTI_05_11", edition: "62" as const },
      { date: "06-17", id: "SANCTI_06_17_1962", edition: "62" as const },
      { date: "07-24", id: "SANCTI_07_24", edition: "pre-55" as const },
      { date: "08-08", id: "SANCTI_08_08_OUTRO_1962", edition: "62" as const },
      { date: "09-30", id: "SANCTI_09_30", edition: "62" as const },
      { date: "11-08", id: "SANCTI_11_08", edition: "62" as const },
    ];

    for (const { date, id, edition } of cases) {
      const yearCal = getCalendar(YEAR, edition);
      const inWeek = yearCal
        .filter((d) => d.date >= `${YEAR}-${date}` && d.date <= shiftDate(`${YEAR}-${date}`, 6))
        .some((d) => d.all.some((m) => m.id === id));
      expect(inWeek, `${id} (${edition}) missing on ${date}`).toBe(true);
    }
  });

  test("rank divergences resolve to different coarse ranks where grades cross class lines", () => {
    for (const r of RANK_DIVERGENCES) {
      const [month, day] = r.date.split("-").map(Number);
      const entry = Object.values(OBSERVANCES).find(
        (m) => m.month === month && m.day === day && !m.local && !m.outro,
      );

      if (!entry?.rankVariants?.length) continue;

      const date = `${YEAR}-${r.date}`;
      const v55 = entry.rankVariants.find((v) => v.rubrics === "*")?.precedence ?? 0;
      const v62 = entry.rankVariants.find((v) => v.rubrics === "Rubrics 1960 - 1960")?.precedence;

      // Only assert when the DO precedences actually straddle a class
      // boundary; within-class changes (e.g. 4 -> 5.5) may map to the
      // same coarse rank until the engine compares fine-grained values.
      if (v62 !== undefined && precedenceToLegacyRank(v55) !== precedenceToLegacyRank(v62)) {
        expect(computeRankFor("pre-55", entry, date)).not.toEqual(
          computeRankFor("62", entry, date),
        );
      }
    }
  });
});
