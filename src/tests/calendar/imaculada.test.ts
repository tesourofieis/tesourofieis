import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("imaculada conceicao", () => {
  const calendar = getCalendarDay("2024-12-08");
  expect(calendar).toMatchObject({
    date: "2024-12-08",
    celebration: [
      {
        colors: ["w"],
        date: "2024-12-08",
        flexibility: "sancti",
        id: "sancti:12-08:1:w",
        name: "12-08",
        priority: 14,
        rank: 1,
        title: "Imaculada Conceição da SS. Virgem",
      },
    ],
    commemoration: [
      {
        colors: ["v"],
        id: "tempora:Adv2-0:1:v",
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
        id: "tempora:Adv2-0:1:v",
        name: "Adv2-0",
        priority: 18,
        rank: 1,
        title: "2º Domingo do Advento",
        weekday: 0,
      },
    ],
  });
});
