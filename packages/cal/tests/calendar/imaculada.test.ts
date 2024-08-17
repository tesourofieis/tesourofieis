import { expect, test } from "vitest";
import { getCalendarDay } from "../../getCalendar";

test("imaculada conceicao", () => {
  const calendar = getCalendarDay("2024-12-08");
  expect(calendar).toMatchObject({
    date: "2024-12-08",
    celebration: [
      {
        colors: ["w"],
        date: "2024-12-08",
        flexibility: "santos",
        id: "santos:12-08:1:w",
        link: "missal/santos/12-08",
        name: "12-08",
        priority: 14,
        rank: 1,
        title: "Imaculada Conceição da SS. Virgem",
        weekday: 0,
      },
    ],
    commemoration: [
      {
        colors: ["v"],
        date: "2024-12-08",
        flexibility: "tempora",
        id: "tempora:adv2-0:1:v",
        link: "missal/advento/adv2-0",
        name: "adv2-0",
        priority: 18,
        rank: 1,
        title: "2º Domingo do Advento",
        weekday: 0,
      },
    ],
    tempora: [
      {
        colors: ["v"],
        date: "2024-12-08",
        flexibility: "tempora",
        id: "tempora:adv2-0:1:v",
        link: "missal/advento/adv2-0",
        name: "adv2-0",
        priority: 18,
        rank: 1,
        title: "2º Domingo do Advento",
        weekday: 0,
      },
    ],
  });
});
