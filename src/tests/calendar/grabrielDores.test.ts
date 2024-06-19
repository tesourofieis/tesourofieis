import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("S. Gabriel de Nossa Senhora das Dores 2024", () => {
  const calendar = getCalendarDay("2024-02-28");
  expect(calendar).toMatchObject({
    celebration: [
      {
        colors: ["v"],
        date: "2024-02-28",
        flexibility: "tempora",
        id: "tempora:quad2-3:3:v",
        link: "missal/quaresma/quad2-3",
        name: "quad2-3",
        priority: 56,
        rank: 3,
        title: "Quarta-feira da 2ª semana da Quaresma",
        weekday: 3,
      },
    ],
    commemoration: [
      {
        colors: ["w"],
        date: "2024-02-27",
        flexibility: "santos",
        id: "santos:02-27:3:w",
        link: "missal/santos/02-27",
        name: "02-27",
        priority: 78,
        rank: 3,
        title: "S. Gabriel de Nossa Senhora das Dores",
        weekday: 2,
      },
    ],
    tempora: [
      {
        colors: ["v"],
        date: "2024-02-28",
        flexibility: "tempora",
        id: "tempora:quad2-3:3:v",
        link: "missal/quaresma/quad2-3",
        name: "quad2-3",
        priority: 56,
        rank: 3,
        title: "Quarta-feira da 2ª semana da Quaresma",
        weekday: 3,
      },
    ],
  });
});

test("S. Gabriel de Nossa Senhora das Dores 2025", () => {
  const calendar = getCalendarDay("2025-02-27");
  expect(calendar).toMatchObject({
    date: "2025-02-27",
    celebration: [
      {
        colors: ["w"],
        date: "2025-02-27",
        flexibility: "santos",
        id: "santos:02-27:3:w",
        link: "missal/santos/02-27",
        name: "02-27",
        priority: 78,
        rank: 3,
        title: "S. Gabriel de Nossa Senhora das Dores",
        weekday: 4,
      },
    ],
    commemoration: [],
    tempora: [
      {
        colors: ["v"],
        date: "2025-02-27",
        flexibility: "tempora",
        id: "tempora:quadp2-4:4:v",
        link: "missal/pre-quaresma/quadp2-4",
        name: "quadp2-4",
        priority: 79,
        rank: 4,
        title: "Quinta-feira da semana da Sexagésima",
        weekday: 4,
      },
    ],
  });
});

test("Segunda-feira da 3ª semana da Quaresma", () => {
  const calendar = getCalendarDay("2025-03-24");

  expect(calendar).toMatchObject({
    date: "2025-03-24",
    celebration: [
      {
        colors: ["v"],
        date: "2025-03-24",
        flexibility: "tempora",
        id: "tempora:quad3-1:3:v",
        link: "missal/quaresma/quad3-1",
        name: "quad3-1",
        priority: 60,
        rank: 3,
        title: "Segunda-feira da 3ª semana da Quaresma",
        weekday: 1,
      },
    ],
    commemoration: [
      {
        colors: ["w"],
        date: "2025-03-24",
        flexibility: "santos",
        id: "santos:03-24:3:w",
        link: "missal/santos/03-24",
        priority: 78,
        rank: 3,
        title: "S. Gabriel Arcanjo",
        weekday: 1,
      },
    ],
    tempora: [
      {
        colors: ["v"],
        date: "2025-03-24",
        flexibility: "tempora",
        id: "tempora:quad3-1:3:v",
        link: "missal/quaresma/quad3-1",
        name: "quad3-1",
        priority: 60,
        rank: 3,
        title: "Segunda-feira da 3ª semana da Quaresma",
        weekday: 1,
      },
    ],
  });
});
