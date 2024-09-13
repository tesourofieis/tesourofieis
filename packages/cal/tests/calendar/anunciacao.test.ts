import { expect, test } from "vitest";
import { getCalendarDay } from "../../getCalendar";

test("Anunciação de Nossa Senhora 2024", () => {
  const calendar = getCalendarDay("2024-04-08");
  expect(calendar).toMatchObject({
    date: "2024-04-08",
    mass: [
      {
        category: "santos",
        color: "w",
        date: "2024-03-25",
        day: 25,
        flexibility: "santos",
        id: "SANCTI_03_25",
        link: "missal/santos/03-25",
        month: 3,
        name: "Anunciação de Nossa Senhora",
        outro: false,
        rank: 1,
        type: "sancti",
      },
      {
        category: "pascoa",
        color: "w",
        date: "2024-04-08",
        flexibility: "tempora",
        id: "TEMPORA_PASC1_1",
        link: "missal/pascoa/pasc1-0",
        name: "Segunda-feira da 1º semana depois da Páscoa",
        outro: false,
        rank: 4,
        type: "pre-lent-to-pentcost",
        week: 1,
        weekday: 1,
      },
    ],
  });
});

test("Anunciação de Nossa Senhora 2025", () => {
  const calendar = getCalendarDay("2025-03-25");
  expect(calendar).toMatchObject({
    date: "2025-03-25",
    mass: [
      {
        color: "w",
        date: "2025-03-25",
        flexibility: "santos",
        id: "SANCTI_03_25",
        link: "missal/santos/03-25",
        rank: 1,
        name: "Anunciação de Nossa Senhora",
      },
      {
        color: "v",
        date: "2025-03-25",
        flexibility: "tempora",
        id: "TEMPORA_QUAD3_2",
        link: "missal/quaresma/quad3-2",
        rank: 3,
        name: "Terça-feira da 3ª semana da Quaresma",
      },
    ],
  });
});
