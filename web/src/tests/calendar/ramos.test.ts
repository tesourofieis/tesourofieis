import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("Domingo de Ramos", () => {
  const calendar = getCalendarDay("2024-03-24");
  expect(calendar).toMatchObject({
    date: "2024-03-24",
    celebration: [
      {
        colors: ["r", "v"],
        date: "2024-03-24",
        flexibility: "tempora",
        id: "tempora:quad6-0:1:rv",
        name: "quad6-0",
        link: "missal/quaresma/quad6-0",
        priority: 19,
        rank: 1,
        title: "Domingo de Ramos",
        weekday: 0,
      },
    ],
    commemoration: [],
    tempora: [
      {
        colors: ["r", "v"],
        date: "2024-03-24",
        flexibility: "tempora",
        id: "tempora:quad6-0:1:rv",
        name: "quad6-0",
        link: "missal/quaresma/quad6-0",
        priority: 19,
        rank: 1,
        title: "Domingo de Ramos",
        weekday: 0,
      },
    ],
  });
});
