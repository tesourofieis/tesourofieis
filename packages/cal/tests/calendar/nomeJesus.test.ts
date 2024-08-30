import { expect, test } from "vitest";
import { getCalendarDay } from "../../getCalendar";

test("santissimo nome jesus", () => {
  expect(getCalendarDay("2024-01-02")).toMatchObject({
    date: "2024-01-02",
    celebration: [
      {
        date: "2024-01-02",
        flexibility: "tempora",
        name: "nat2-0",
        link: "missal/natal/nat2-0",
        rank: 2,
        colors: ["w"],
        id: "tempora:nat2-0:2:w",
        title: "Santíssimo Nome de Jesus",
        priority: 43,
        weekday: 0,
      },
    ],
    commemoration: [
      {
        colors: ["r"],
        date: "2024-01-02",
        flexibility: "santos",
        id: "santos:01-02:3:r",
        link: "missal/santos/01-02",
        name: "01-02",
        priority: 78,
        rank: 3,
        title: "Oitava de S. Estevão, Mártir",
        weekday: 2,
      },
    ],
    tempora: [],
  });
});
