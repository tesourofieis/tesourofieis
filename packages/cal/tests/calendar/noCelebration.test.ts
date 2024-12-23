import { expect, test } from "vitest";
import { getCalendarDay } from "../../getCalendar";

test("no celebration when tempora 01-08 2024", () => {
  const calendar = getCalendarDay("2024-01-08");
  expect(calendar).toMatchObject({
    date: "2024-01-08",
    mass: [
      {
        color: "w",
        date: "2024-01-08",
        flexibility: "tempora",
        id: "TEMPORA_EPI1_1",
        link: "missal/epifania/epi1-0",
        rank: 4,
        name: "Segunda-feira da semana após a Epifania",
      },
    ],
  });
});

test("no celebration when tempora 01-07 2024", () => {
  const calendar = getCalendarDay("2024-01-07");
  expect(calendar).toMatchObject({
    date: "2024-01-07",
    mass: [
      {
        color: "w",
        date: "2024-01-07",
        flexibility: "tempora",
        id: "TEMPORA_EPI1_0A",
        link: "missal/epifania/epi1-0a",
        name: "Sagrada Família",
        rank: 2,
      },
    ],
  });
});

test("no celebration when tempora 2025", () => {
  const calendar = getCalendarDay("2025-01-07");
  expect(calendar).toMatchObject({
    date: "2025-01-07",
    mass: [
      {
        color: "w",
        date: "2025-01-07",
        flexibility: "santos",
        id: "SANCTI_01_06",
        link: "missal/santos/01-06",
        name: "Feria",
        rank: 1,
      },
    ],
  });
});
