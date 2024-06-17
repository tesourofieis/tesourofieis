import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("sabado santo", () => {
  const calendar = getCalendarDay("2024-03-30");
  expect(calendar).toMatchObject({
    celebration: [
      {
        colors: ["v", "w"],
        date: "2024-03-30",
        flexibility: "tempora",
        id: "tempora:quad6-6:1:vw",
        name: "Quad6-6",
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
        id: "tempora:quad6-6:1:vw",
        name: "Quad6-6",
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
        name: "Pasc0-0",
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
        id: "tempora:pasc0-0:1:w",
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
        name: "Pasc0-1",
        priority: 29,
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
        name: "Pasc0-1",
        priority: 29,
        rank: 1,
        title: "Segunda-feira Pascal",
        weekday: 1,
      },
    ],
  });
});
