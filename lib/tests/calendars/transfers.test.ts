import { describe, expect, test } from "bun:test";
import { getCalendar, getCalendarDay } from "../../getCalendar";

describe("Annunciation transfer (both editions)", () => {
  test("2024: Mar 25 falls in Holy Week -> Monday after Low Sunday (Apr 8)", () => {
    // DO Tabulae/Transfer/331.txt: 04-08=03-25 (Easter 2024 = Mar 31).
    for (const edition of ["pre-55", "62"] as const) {
      const holyWeekDay = getCalendarDay("2024-03-25", edition);
      expect(holyWeekDay?.mass.some((m) => m.id === "SANCTI_03_25")).toBe(false);

      const transferred = getCalendarDay("2024-04-08", edition);
      expect(transferred?.mass.map((m) => m.id)).toContain("SANCTI_03_25");
    }
  });

  test("normal years keep the Annunciation on March 25th", () => {
    for (const edition of ["pre-55", "62"] as const) {
      const day = getCalendarDay("2025-03-25", edition);
      expect(day?.mass.map((m) => m.id)).toContain("SANCTI_03_25");
    }
  });
});

describe("Sunday precedence under Rubrics 1960", () => {
  test("July 26 2026 is a Sunday: both keep it pre-55; in '62 the Sunday leads and St Anne is commemorated under it", () => {
    expect(new Date(2026, 6, 26).getDay()).toBe(0);

    const pre55 = getCalendarDay("2026-07-26", "pre-55");
    expect(pre55?.mass.some((m) => m.id === "SANCTI_07_26")).toBe(true);

    // missalemeum rule_2nd_class_sunday: the II class Sunday keeps
    // precedence, the feast is commemorated under it - never displaced.
    const m62Sunday = getCalendarDay("2026-07-26", "62");
    const ids = m62Sunday?.mass.map((m) => m.id) ?? [];
    expect(ids).toContain("SANCTI_07_26");
    expect(ids.indexOf(ids.find((id) => id?.startsWith("TEMPORA"))!)).toBeLessThan(
      ids.indexOf("SANCTI_07_26"),
    );
  });

  test("the Exaltation of the Holy Cross takes over a II class Sunday entirely in '62", () => {
    // Sep 14 2025 is a Sunday.
    expect(new Date(2025, 8, 14).getDay()).toBe(0);
    const m62 = getCalendarDay("2025-09-14", "62");
    expect(m62?.mass.map((m) => m.id)).toEqual(["SANCTI_09_14"]);
  });

  test("a I class feast still outranks the Sunday in '62", () => {
    // Jan 1st (Circumcision, I class) on Sunday happens 2023.
    const m62 = getCalendarDay("2023-01-01", "62");
    expect(m62?.mass.some((m) => m.id === "SANCTI_01_01")).toBe(true);
    expect(m62?.mass.filter((m) => m.flexibility === "santos").every((m) => m.rank === 1)).toBe(
      true,
    );
  });
});
