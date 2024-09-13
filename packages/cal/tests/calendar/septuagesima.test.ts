import { expect, test } from "vitest";

import { getCalendarDay } from "../../getCalendar";

test("domingo septuagesima", () => {
  const calendar = getCalendarDay("2024-01-28");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "pre-quaresma",
        color: "v",
        date: "2024-01-28",
        flexibility: "tempora",
        id: "TEMPORA_QUADP1_0",
        link: "missal/pre-quaresma/quadp1-0",
        name: "Domingo da Septuagésima",
        outro: false,
        rank: 2,
        type: "pre-lent-to-pentcost",
        week: 1,
        weekday: 0,
      },
      {
        category: "santos",
        color: "w",
        date: "2024-01-28",
        day: 28,
        flexibility: "santos",
        id: "SANCTI_01_28",
        link: "missal/santos/01-28",
        month: 1,
        name: "S. Pedro Nolasco, Confessor",
        outro: false,
        rank: 3,
        type: "sancti",
      },
      {
        category: "santos",
        color: "r",
        date: "2024-01-28",
        day: 28,
        flexibility: "santos",
        id: "SANCTI_01_28_LISBOA_FARO",
        link: "missal/santos/01-28-lisboa-faro",
        local: "lisboa-faro",
        month: 1,
        name: "Sétimo dia dentro da Oitava de S. Vicente, Mártir",
        outro: false,
        rank: 3,
        type: "sancti",
      },
    ],
  });
});

test("segunda septuagesima", () => {
  const calendar = getCalendarDay("2024-01-29");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "santos",
        color: "w",
        date: "2024-01-29",
        day: 29,
        flexibility: "santos",
        id: "SANCTI_01_29",
        link: "missal/santos/01-29",
        month: 1,
        name: "S. Francisco de Sales, Bispo, Confessor e Doutor da Igreja",
        outro: false,
        rank: 3,
        type: "sancti",
      },
      {
        category: "santos",
        color: "r",
        date: "2024-01-29",
        day: 29,
        flexibility: "santos",
        id: "SANCTI_01_29_LISBOA_FARO",
        link: "missal/santos/01-29-lisboa-faro",
        local: "lisboa-faro",
        month: 1,
        name: "Oitava de S. Vicente, Mártir",
        outro: false,
        rank: 3,
        type: "sancti",
      },
      {
        category: "pre-quaresma",
        color: "v",
        date: "2024-01-29",
        flexibility: "tempora",
        id: "TEMPORA_QUADP1_1",
        link: "missal/pre-quaresma/quadp1-0",
        name: "Segunda-feira da semana da Septuagésima",
        outro: false,
        rank: 4,
        type: "pre-lent-to-pentcost",
        week: 1,
        weekday: 1,
      },
    ],
  });
});
