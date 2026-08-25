import { expect, test } from "bun:test";

import { getCalendarDay } from "../../getCalendar";

test("matias shift", () => {
  const calendar = getCalendarDay("2024-02-24", "pre-55");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "quaresma",
        color: "v",
        date: "2024-02-24",
        flexibility: "tempora",
        id: "TEMPORA_QUAD1_6",
        link: "missal/quaresma/quad1-6",
        name: "Sábado da 1ª semana da Quaresma, Têmporas da Primavera",
        rank: 2,
        type: "pre-lent-to-pentcost",
        week: 1,
        weekday: 6,
      },
    ],
  });
});

test("matias shift 2", () => {
  const calendar = getCalendarDay("2024-02-25", "pre-55");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "quaresma",
        color: "v",
        date: "2024-02-25",
        flexibility: "tempora",
        id: "TEMPORA_QUAD2_0",
        link: "missal/quaresma/quad2-0",
        name: "2º Domingo da Quaresma",
        rank: 1,
        type: "pre-lent-to-pentcost",
        week: 2,
        weekday: 0,
      },
    ],
  });
});

test("matias", () => {
  // DO: transferred Matthias celebrates on Monday, feria commemorated.
  const calendar = getCalendarDay("2024-02-26", "pre-55")!;
  expect(calendar.mass[0]).toMatchObject({
    flexibility: "santos",
    id: "SANCTI_02_24",
    name: "S. Matias, Apóstolo",
    rank: 2,
  });
  expect(calendar.mass[1]?.flexibility).toBe("tempora");
});
