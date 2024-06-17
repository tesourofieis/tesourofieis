import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("Anunciação de Nossa Senhora 2024", () => {
  const calendar = getCalendarDay("2024-04-08");
  expect(calendar).toMatchObject({
    date: "2024-04-08",
    celebration: [
      {
        colors: ["w"],
        id: "sancti:03-25:1:w",
        rank: 1,
        title: "Anunciação de Nossa Senhora",
        link: "",
      },
    ],
    commemoration: [],
    tempora: [
      {
        colors: ["w"],
        date: "2024-04-08",
        flexibility: "tempora",
        id: "tempora:Pasc1-1:4:w",
        name: "Pasc1-1",
        priority: 80,
        rank: 4,
        title: "Segunda-feira da 1º semana depois da Páscoa",
        weekday: 1,
      },
    ],
  });
});

test("Anunciação de Nossa Senhora 2025", () => {
  const calendar = getCalendarDay("2025-03-25");
  expect(calendar).toMatchObject({
    date: "2025-03-25",
    celebration: [
      {
        colors: ["w"],
        date: "2025-03-25",
        flexibility: "sancti",
        id: "sancti:03-25:1:w",
        name: "03-25",
        priority: 41,
        rank: 1,
        title: "Anunciação de Nossa Senhora",
        weekday: 2,
      },
    ],
    commemoration: [
      {
        colors: ["v"],
        date: "2025-03-25",
        flexibility: "tempora",
        id: "tempora:Quad3-2:3:v",
        name: "Quad3-2",
        priority: 62,
        rank: 3,
        title: "Terça-feira da 3ª semana da Quaresma",
        weekday: 2,
      },
    ],
    tempora: [
      {
        colors: ["v"],
        date: "2025-03-25",
        flexibility: "tempora",
        id: "tempora:Quad3-2:3:v",
        name: "Quad3-2",
        priority: 62,
        rank: 3,
        title: "Terça-feira da 3ª semana da Quaresma",
        weekday: 2,
      },
    ],
  });
});
