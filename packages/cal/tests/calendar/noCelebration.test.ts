import { expect, test } from "vitest";
import { getCalendarDay } from "../../getCalendar";

test("no celebration when tempora", () => {
  const calendar = getCalendarDay("2024-01-08");
  expect(calendar).toMatchObject({
    date: "2024-01-08",
    mass: [
      {
        color: "w",
        date: "2024-01-08",
        flexibility: "tempora",
        id: "TEMPORA_EPI1_1",
        link: "missal/epifania/epi1-1",
        rank: 4,
        name: "Segunda-feira da semana após a Epifania",
      },
    ],
  });
});
