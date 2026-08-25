import { describe, expect, test } from "bun:test";
import { gradeLabel } from "../../calendars/grade";
import { getCalendarDay } from "../../getCalendar";

function massOn(date: string, edition: "pre-55" | "62", id: string) {
  return getCalendarDay(date, edition)!.mass.find((m) => m.id === id)!;
}

describe("gradeLabel", () => {
  test("distinguishes Sunday grades per era", () => {
    // 2026-08-16: semiduplex Pentecost Sunday pre-55, II class under '62.
    const sun55 = massOn("2026-08-16", "pre-55", "TEMPORA_PENT12_0");
    const sun62 = massOn("2026-08-16", "62", "TEMPORA_PENT12_0");
    expect(gradeLabel(sun55)).toBe("Domingo semidúplice");
    expect(gradeLabel(sun62)).toBe("Domingo II classe");
  });

  test("feast grades across the scale", () => {
    expect(gradeLabel(massOn("2026-08-16", "pre-55", "SANCTI_08_16"))).toBe("Duplex II classe"); // St Joachim, both eras II class
    const barbara = massOn("2026-12-04", "pre-55", "SANCTI_12_04_OUTRO");
    expect(gradeLabel(barbara)).toBe("Simplex");
    const lawrenceVigil = massOn("2027-08-09", "62", "SANCTI_08_09_OUTRO_1962");
    expect(gradeLabel(lawrenceVigil)).toBe("Vigília");
  });
});
