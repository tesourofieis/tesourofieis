import { expect, test } from "vitest";
import { getCalendarDay } from "../../getCalendar";

test("Domingo de Ramos", () => {
  const calendar = getCalendarDay("2024-03-24");
  expect(calendar).toMatchObject({
    date: "2024-03-24",
    mass: [
      {
        category: "quaresma",
        color: "v",
        date: "2024-03-24",
        flexibility: "tempora",
        id: "TEMPORA_QUAD6_0",
        link: "missal/quaresma/quad6-0",
        name: "Domingo de Ramos",
        rank: 1,
        type: "pre-lent-to-pentcost",
        week: 6,
        weekday: 0,
      },
      {
        category: "santos",
        color: "w",
        date: "2024-03-24",
        day: 24,
        flexibility: "santos",
        id: "SANCTI_03_24",
        link: "missal/santos/03-24",
        month: 3,
        name: "S. Gabriel Arcanjo",
        rank: 3,
        type: "sancti",
      },
    ],
    // Local masses are now in alternatives (don't participate in concurrency)
    alternatives: [
      {
        category: "santos",
        color: "w",
        date: "2024-03-24",
        day: 24,
        flexibility: "santos",
        id: "SANCTI_03_24_PORTUGAL",
        link: "missal/santos/03-24-portugal",
        local: "portugal",
        month: 3,
        name: "Festa do Santíssimo Sacramento",
        rank: 3,
        type: "sancti",
      },
    ],
  });
});
