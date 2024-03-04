import { expect, test } from "vitest";
import { Calendar } from "../../lib/calendar";

test("no celebration when tempora", () => {
  const calendar = new Calendar(2024);
  expect(calendar.get("2024-01-08")).toMatchObject({
    date: "2024-01-08",
    celebration: [],
    commemoration: [],
    tempora: [
      {
        colors: ["w"],
        date: "2024-01-08",
        flexibility: "tempora",
        id: "tempora:Epi1-1:4:w",
        name: "Epi1-1",
        priority: 80,
        rank: 4,
        title: "Segunda-feira da semana após a Epifania",
        weekday: 1,
      },
    ],
  });
});
