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
        id: "tempora:Quad2-3:3:v",
        name: "Quad2-3",
        priority: 57,
        rank: 3,
        title: "Quarta-feira da 2ª semana da Quaresma",
      },
    ],
    commemoration: [
      {
        colors: ["w"],
        date: "2024-02-27",
        flexibility: "sancti",
        id: "sancti:02-27:3:w",
        name: "02-27",
        priority: 79,
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
        id: "tempora:Quad2-3:3:v",
        name: "Quad2-3",
        priority: 57,
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
        flexibility: "sancti",
        id: "sancti:02-27:3:w",
        name: "02-27",
        priority: 79,
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
        id: "tempora:Quadp2-4:4:v",
        name: "Quadp2-4",
        priority: 80,
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
        id: "tempora:Quad3-1:3:v",
        name: "Quad3-1",
        priority: 61,
        rank: 3,
        title: "Segunda-feira da 3ª semana da Quaresma",
        weekday: 1,
      },
    ],
    commemoration: [
      {
        colors: ["w"],
        date: "2025-03-24",
        flexibility: "sancti",
        id: "sancti:03-24:3:w",
        name: "03-24",
        priority: 79,
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
        id: "tempora:Quad3-1:3:v",
        name: "Quad3-1",
        priority: 61,
        rank: 3,
        title: "Segunda-feira da 3ª semana da Quaresma",
        weekday: 1,
      },
    ],
  });
});
