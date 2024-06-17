import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("santissimo nome jesus", () => {
  expect(getCalendarDay("2024-01-02")).toMatchObject({
    date: "2024-01-02",
    celebration: [
      {
        date: "2024-01-02",
        flexibility: "tempora",
        name: "Nat2-0",
        rank: 2,
        colors: ["w"],
        id: "tempora:nat2-0:2:w",
        title: "Santíssimo Nome de Jesus",
        priority: 45,
        weekday: 0,
      },
    ],
    commemoration: [],
    tempora: [],
  });
});
