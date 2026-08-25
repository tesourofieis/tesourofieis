import { expect, test } from "bun:test";
import { getCalendarDay } from "../../getCalendar";

test("Domingo", () => {
  const calendar = getCalendarDay("2024-01-01", "pre-55");
  expect(calendar).toMatchObject({
    date: "2024-01-01",
    mass: [
      {
        category: "santos",
        color: "w",
        date: "2024-01-01",
        day: 1,
        flexibility: "santos",
        id: "SANCTI_01_01",
        link: "missal/santos/01-01",
        month: 1,
        name: "Circuncisão do Senhor e Oitava do Natal",
        rank: 1,
        type: "sancti",
      },
    ],
  });
});

test("Sagrada Familia", () => {
  const calendar = getCalendarDay("2024-01-07", "pre-55")!;
  expect(calendar.mass[0]).toMatchObject({
    flexibility: "tempora",
    id: "TEMPORA_EPI1_0A",
    name: "Sagrada Família",
  });
  // The octave-day office follows at Semiduplex 5.6.
  expect(calendar.mass[1]).toMatchObject({ id: "SANCTI_01_07", precedence: 5.6 });
});
