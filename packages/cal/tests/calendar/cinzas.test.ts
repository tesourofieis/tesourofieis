import { expect, test } from "vitest";

import { getCalendarDay } from "../../getCalendar";

test("cinzas", () => {
  const calendar = getCalendarDay("2024-02-14");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "pre-quaresma",
        color: "v",
        date: "2024-02-14",
        flexibility: "tempora",
        id: "TEMPORA_QUADP3_3",
        link: "missal/pre-quaresma/quadp3-3",
        name: "Quarta-feira de Cinzas",
        outro: false,
        rank: 1,
        type: "pre-lent-to-pentcost",
        week: 3,
        weekday: 3,
      },
      {
        category: "santos",
        color: "r",
        date: "2024-02-14",
        flexibility: "santos",
        id: "SANCTI_02_14",
        link: "missal/santos/02-14",
        name: "S. Valentim, Presbítero e Mártir",
        outro: false,
        rank: 4,
        type: "sancti",
      },
    ],
  });
});
