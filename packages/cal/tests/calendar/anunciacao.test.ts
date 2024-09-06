import { expect, test } from "vitest";
import { getCalendarDay } from "../../getCalendar";

test("Anunciação de Nossa Senhora 2024", () => {
  const calendar = getCalendarDay("2024-04-08");
  expect(calendar).toMatchObject({
    date: "2024-04-08",
    celebration: [
      {
        colors: ["w"],
        id: "santos:03-25:1:w",
        date: "2024-03-25",
        flexibility: "santos",
        link: "missal/santos/03-25",
        name: "03-25",
        rank: 1,
        title: "Anunciação de Nossa Senhora",
      },
    ],
    commemoration: [],
    tempora: [
      {
        colors: ["w"],
        date: "2024-04-08",
        flexibility: "tempora",
        id: "tempora:pasc1-1:4:w",
        link: "missal/pascoa/pasc1-0",
        name: "pasc1-1",
        rank: 4,
        title: "Segunda-feira da 1º semana depois da Páscoa",
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
        flexibility: "santos",
        id: "santos:03-25:1:w",
        link: "missal/santos/03-25",
        name: "03-25",
        rank: 1,
        title: "Anunciação de Nossa Senhora",
      },
    ],
    commemoration: [
      {
        colors: ["v"],
        date: "2025-03-25",
        flexibility: "tempora",
        id: "tempora:quad3-2:3:v",
        link: "missal/quaresma/quad3-2",
        name: "quad3-2",
        rank: 3,
        title: "Terça-feira da 3ª semana da Quaresma",
      },
    ],
    tempora: [
      {
        colors: ["v"],
        date: "2025-03-25",
        flexibility: "tempora",
        id: "tempora:quad3-2:3:v",
        link: "missal/quaresma/quad3-2",
        name: "quad3-2",
        rank: 3,
        title: "Terça-feira da 3ª semana da Quaresma",
      },
    ],
  });
});
