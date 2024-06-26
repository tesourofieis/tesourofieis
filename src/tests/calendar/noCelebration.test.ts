import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("no celebration when tempora", () => {
  const calendar = getCalendarDay("2024-01-08");
  expect(calendar).toMatchObject({
    date: "2024-01-08",
    celebration: [],
    commemoration: [],
    tempora: [
      {
        colors: ["w"],
        date: "2024-01-08",
        flexibility: "tempora",
        id: "tempora:epi1-1:4:w",
        name: "epi1-1",
        link: "missal/epifania/epi1-0",
        priority: 79,
        rank: 4,
        title: "Segunda-feira da semana após a Epifania",
        weekday: 1,
      },
    ],
  });
});
