import { expect, test } from "vitest";

import { getCalendarDay } from "../../getCalendar";

test("matias shift", () => {
  const calendar = getCalendarDay("2024-02-24");
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
        outro: false,
        rank: 2,
        type: "pre-lent-to-pentcost",
        week: 1,
        weekday: 6,
      },
    ],
  });
});

test("matias shift 2", () => {
  const calendar = getCalendarDay("2024-02-25");
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
        outro: false,
        rank: 1,
        type: "pre-lent-to-pentcost",
        week: 2,
        weekday: 0,
      },
    ],
  });
});

test("matias", () => {
  const calendar = getCalendarDay("2024-02-26");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "santos",
        color: "r",
        day: 24,
        flexibility: "santos",
        id: "SANCTI_02_24",
        link: "missal/santos/02-24",
        month: 2,
        name: "S. Matias, Apóstolo",
        outro: false,
        rank: 2,
        type: "sancti",
      },
      {
        category: "quaresma",
        color: "v",
        date: "2024-02-26",
        flexibility: "tempora",
        id: "TEMPORA_QUAD2_1",
        link: "missal/quaresma/quad2-1",
        name: "Segunda-feira da 2ª semana da Quaresma",
        outro: false,
        rank: 3,
        type: "pre-lent-to-pentcost",
        week: 2,
        weekday: 1,
      },
    ],
  });
});
