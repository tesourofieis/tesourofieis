import { describe, expect, test } from "bun:test";
import { getCalendar, getCalendarDay, getSeason } from "../../getCalendar";

describe("per-edition calendars", () => {
  test("May 1st differs between editions", () => {
    const pre55 = getCalendarDay("2025-05-01", "pre-55");
    const m62 = getCalendarDay("2025-05-01", "62");

    // pre-55 keeps Ss Philip & James as the office.
    expect(pre55?.mass.some((m) => m.id === "SANCTI_05_01")).toBe(true);

    // 1962 promotes S. José Operário to the office (I class per DO).
    expect(m62?.mass.map((m) => m.id)).toContain("SANCTI_05_01_1962");
    expect(m62?.mass.some((m) => m.id === "SANCTI_05_01")).toBe(false);

    // Editions resolve independently - mutating one never affects the other.
    expect(pre55).not.toBe(m62);
  });

  test("shared dates agree on the office across editions", () => {
    for (const date of ["2024-12-25", "2025-03-19", "2026-01-06"]) {
      const pre55 = getCalendarDay(date, "pre-55");
      const m62 = getCalendarDay(date, "62");
      expect(m62?.mass.map((m) => m.name)).toEqual(pre55?.mass.map((m) => m.name));
    }
  });

  test("seasons are identical across editions", () => {
    for (const date of ["2024-02-11", "2024-04-01", "2024-12-20"]) {
      expect(getSeason(date, "62")).toBe(getSeason(date, "pre-55"));
    }
  });

  test("the default edition is Rubrics 1960 (62)", () => {
    const byDefault = getCalendarDay("2025-05-01");
    expect(byDefault?.mass.map((m) => m.id)).toContain("SANCTI_05_01_1962");

    // Explicit pre-55 still resolves the pre-55 office.
    expect(getCalendarDay("2025-05-01", "pre-55")?.mass.map((m) => m.id)).toContain("SANCTI_05_01");
  });

  test('selection "62" suppresses vigils and feasts abolished by the 1955/1960 reforms', () => {
    // Vigil of the Epiphany: abolished in 1955.
    expect(getCalendarDay("2025-01-05", "pre-55")?.mass.some((m) => m.id === "SANCTI_01_05")).toBe(
      true,
    );
    const jan5 = getCalendarDay("2026-01-05", "62");
    if (jan5?.mass.some((m) => m.id === "SANCTI_01_06")) {
      expect(jan5.mass.some((m) => m.id === "SANCTI_01_05")).toBe(false);
    }

    // Leo II replaced by Irenaeus on Jul 3rd.
    expect(getCalendarDay("2025-07-03", "62")?.mass.some((m) => m.id === "SANCTI_07_03")).toBe(
      false,
    );
    expect(
      getCalendarDay("2025-07-03", "62")?.mass.some((m) => m.id === "SANCTI_07_03_OUTRO_1962"),
    ).toBe(true);

    // Vianney moves from Aug 9th to Aug 8th.
    expect(getCalendarDay("2025-08-09", "62")?.mass.some((m) => m.id === "SANCTI_08_09")).toBe(
      false,
    );

    // Christmas octave: St Thomas of Canterbury reduced to a commemoration.
    expect(getCalendarDay("2024-12-29", "62")?.mass.some((m) => m.id === "SANCTI_12_29")).toBe(
      false,
    );
    expect(getCalendarDay("2024-12-29", "pre-55")?.mass.some((m) => m.id === "SANCTI_12_29")).toBe(
      true,
    );
  });

  test("each edition resolves its own office without cross-contamination", () => {
    const pre55 = getCalendarDay("2025-03-19", "pre-55");
    const m62 = getCalendarDay("2025-03-19", "62");
    expect(pre55?.mass.map((m) => m.id)).toEqual(m62?.mass.map((m) => m.id));
  });
});

describe("edition-aware year calendars", () => {
  test("getCalendar returns a full year per edition without cross-talk", () => {
    const pre55 = getCalendar(2025, "pre-55");
    const m62 = getCalendar(2025, "62");

    expect(pre55).toHaveLength(365);
    expect(m62).toHaveLength(365);

    for (let i = 0; i < pre55.length; i++) {
      expect(m62[i]?.date).toBe(pre55[i]!.date);
      expect(m62[i]?.season).toBe(pre55[i]!.season);
    }
  });
});

describe("divergence-catalogue routing", () => {
  const cases = [
    {
      date: "2026-05-03",
      pre55: ["SANCTI_05_03"],
      m62: ["SANCTI_05_03_1962"],
      notPre55: [],
      not62: ["SANCTI_05_03"],
    },
    {
      date: "2026-06-28",
      pre55: ["SANCTI_06_28", "SANCTI_06_28_OUTRO"],
      m62: ["SANCTI_06_28"],
      notPre55: [],
      not62: ["SANCTI_06_28_OUTRO"],
    },
    {
      date: "2026-08-01",
      pre55: ["SANCTI_08_01_AD_VINCULA", "SANCTI_08_01"],
      m62: ["SANCTI_08_01"],
      notPre55: [],
      not62: ["SANCTI_08_01_AD_VINCULA"],
    },
    {
      date: "2026-08-09",
      pre55: ["SANCTI_08_09"],
      m62: ["SANCTI_08_09_OUTRO_1962"],
      notPre55: [],
      not62: ["SANCTI_08_09"],
    },
    {
      date: "2026-11-29",
      pre55: ["SANCTI_11_29"],
      m62: ["SANCTI_11_29_1962"],
      notPre55: ["SANCTI_11_29_1962"],
      not62: ["SANCTI_11_29"],
    },
  ];

  test("each edition celebrates what its Kalendaria prescribes", () => {
    for (const { date, pre55, m62, notPre55, not62 } of cases) {
      const ids = (ed: "pre-55" | "62") =>
        getCalendarDay(date, ed)?.mass.map((m) => m.id) ?? [];
      for (const id of pre55) expect(ids("pre-55")).toContain(id);
      for (const id of m62) expect(ids("62")).toContain(id);
      for (const id of notPre55) expect(ids("pre-55")).not.toContain(id);
      for (const id of not62) expect(ids("62")).not.toContain(id);
    }
  });

  test("the Peter and Paul vigil is II class under Rubrics 1960 only", () => {
    const vigil55 = getCalendarDay("2026-06-28", "pre-55")?.mass.find(
      (m) => m.id === "SANCTI_06_28",
    );
    const vigil62 = getCalendarDay("2026-06-28", "62")?.mass.find((m) => m.id === "SANCTI_06_28");
    expect(vigil55?.rank).toBe(3);
    expect(vigil62?.rank).toBe(2);
  });
});

describe("Divino Afflatu commemoration stack", () => {
  test("promoted simples are commemorated pre-55 and absent under '62", () => {
    const dec4 = getCalendarDay("2026-12-04", "pre-55")?.mass.map((m) => m.id) ?? [];
    expect(dec4).toContain("SANCTI_12_04_OUTRO"); // Santa Bárbara
    const dec462 = getCalendarDay("2026-12-04", "62")?.mass.map((m) => m.id) ?? [];
    expect(dec462).not.toContain("SANCTI_12_04_OUTRO");
  });

  test("the vigil of the Immaculate Conception serves both editions at grade", () => {
    const v55 = getCalendarDay("2026-12-07", "pre-55")?.mass.find(
      (m) => m.id === "SANCTI_12_07_OUTRO",
    );
    const v62 = getCalendarDay("2026-12-07", "62")?.mass.find(
      (m) => m.id === "SANCTI_12_07_OUTRO",
    );
    expect(v55?.precedence).toBe(3);
    expect(v62?.precedence).toBe(4); // Duplex majus under Rubrics 1960
  });

  test("Prisca replaces the Cathedra under '62 on Jan 18th", () => {
    const ids62 = getCalendarDay("2026-01-18", "62")?.mass.map((m) => m.id) ?? [];
    expect(ids62).toContain("SANCTI_01_18_OUTRO");
    expect(ids62).not.toContain("SANCTI_01_18");
    const ids55 = getCalendarDay("2026-01-18", "pre-55")?.mass.map((m) => m.id) ?? [];
    expect(ids55).toContain("SANCTI_01_18");
  });
});
