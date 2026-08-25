import { expect, test } from "bun:test";
import { getCalendarDay } from "../../getCalendar";

test("octave-day office leads on 01-08 (pre-55)", () => {
  const calendar = getCalendarDay("2024-01-08", "pre-55")!;
  expect(calendar.mass[0]).toMatchObject({
    color: "w",
    flexibility: "santos",
    id: "SANCTI_01_08",
    rank: 2,
    name: "Terceiro dia dentro da Oitava da Epifania",
  });
});

test("Sagrada Familia outranks the octave day by a rubrical hair (DO 5.61 vs 5.6)", () => {
  const calendar = getCalendarDay("2024-01-07", "pre-55")!;
  expect(calendar.mass[0]).toMatchObject({
    flexibility: "tempora",
    id: "TEMPORA_EPI1_0A",
    name: "Sagrada Família",
  });
  expect(calendar.mass[1]?.id).toBe("SANCTI_01_07");
});

test("octave-day office on 2025-01-07 (pre-55)", () => {
  const calendar = getCalendarDay("2025-01-07", "pre-55")!;
  expect(calendar.mass[0]).toMatchObject({
    flexibility: "santos",
    id: "SANCTI_01_07",
    name: "Segundo dia dentro da Oitava da Epifania",
    rank: 2,
  });
});
