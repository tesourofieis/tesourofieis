import { expect, test } from "vitest";
import { getCalendarDay } from "../../getCalendar";

test("Domingo", () => {
  const calendar = getCalendarDay("2024-01-01");
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
        outro: false,
        rank: 1,
        type: "sancti",
      }
    ],
  });
});

test("Sagrada Familia", () => {
  const calendar = getCalendarDay("2024-01-07");
  expect(calendar).toMatchObject({
    date: "2024-01-07",
    mass: [
      {
        category: "epifania",
        color: "w",
        date: "2024-01-07",
        flexibility: "tempora",
        id: "TEMPORA_EPI1_0A",
        link: "missal/epifania/epi1-0a",
        name: "Sagrada Família",
        outro: false,
        rank: 2,
        type: "post-epiphany",
        week: 1,
        weekday: 0,
      },
    ],
  });
});
