import { expect, test } from "vitest";
import { getCalendarDay } from "../getCalendar";

test("sabado santo", () => {
  const calendar = getCalendarDay("2024-03-30");
  expect(calendar).toMatchObject({
    celebration: [
      {
        colors: ["v", "w"],
        date: "2024-03-30",
        flexibility: "tempora",
        link: "missal/quaresma/quad6-6",
        name: "quad6-6",
        priority: 7,
        rank: 1,
        title: "Sábado Santo",
        weekday: 6,
      },
    ],
    commemoration: [],
    tempora: [
      {
        colors: ["v", "w"],
        date: "2024-03-30",
        flexibility: "tempora",
        link: "missal/quaresma/quad6-6",
        name: "quad6-6",
        priority: 7,
        rank: 1,
        title: "Sábado Santo",
        weekday: 6,
      },
    ],
  });
});

test("easter", () => {
  const calendar = getCalendarDay("2024-03-31");
  expect(calendar).toMatchObject({
    celebration: [
      {
        colors: ["w"],
        id: "tempora:pasc0-0:1:w",
        date: "2024-03-31",
        flexibility: "tempora",
        link: "missal/pascoa/pasc0-0",
        name: "pasc0-0",
        priority: 3,
        rank: 1,
        title: "Domingo da Ressurreição",
        weekday: 0,
      },
    ],
    commemoration: [],
    tempora: [
      {
        colors: ["w"],
        date: "2024-03-31",
        flexibility: "tempora",
        id: "tempora:pasc0-0:1:w",
        link: "missal/pascoa/pasc0-0",
        name: "pasc0-0",
        priority: 3,
        rank: 1,
        title: "Domingo da Ressurreição",
        weekday: 0,
      },
    ],
  });
});

test("segunda pascal", () => {
  const calendar = getCalendarDay("2024-04-01");
  expect(calendar).toMatchObject({
    celebration: [
      {
        colors: ["w"],
        date: "2024-04-01",
        flexibility: "tempora",
        id: "tempora:pasc0-1:1:w",
        link: "missal/pascoa/pasc0-1",
        name: "pasc0-1",
        priority: 27,
        rank: 1,
        title: "Segunda-feira Pascal",
        weekday: 1,
      },
    ],
    commemoration: [],
    tempora: [
      {
        colors: ["w"],
        date: "2024-04-01",
        flexibility: "tempora",
        id: "tempora:pasc0-1:1:w",
        link: "missal/pascoa/pasc0-1",
        name: "pasc0-1",
        priority: 27,
        rank: 1,
        title: "Segunda-feira Pascal",
        weekday: 1,
      },
    ],
  });
});
