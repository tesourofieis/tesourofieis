import { expect, test } from "vitest";

import { getCalendarDay } from "../../getCalendar";

test("sabado santo", () => {
  const calendar = getCalendarDay("2024-03-30");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "quaresma",
        color: "vw",
        date: "2024-03-30",
        flexibility: "tempora",
        id: "TEMPORA_QUAD6_6",
        link: "missal/quaresma/quad6-6",
        name: "Sábado Santo",
        outro: false,
        rank: 1,
        type: "pre-lent-to-pentcost",
        week: 6,
        weekday: 6,
      },
    ],
  });
});

test("easter", () => {
  const calendar = getCalendarDay("2024-03-31");
  expect(calendar).toMatchObject({
    mass: [
      {
        date: "2024-03-31",
        flexibility: "tempora",
        id: "TEMPORA_PASC0_0",
        link: "missal/pascoa/pasc0-0",
        name: "Domingo da Ressurreição",
        rank: 1,
      },
    ],
  });
});

test("segunda pascal", () => {
  const calendar = getCalendarDay("2024-04-01");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "pascoa",
        color: "w",
        date: "2024-04-01",
        flexibility: "tempora",
        id: "TEMPORA_PASC0_1",
        link: "missal/pascoa/pasc0-1",
        name: "Segunda-feira Pascal",
        outro: false,
        rank: 1,
        type: "pre-lent-to-pentcost",
        week: 0,
        weekday: 1,
      },
    ],
  });
});
