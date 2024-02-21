import { expect, test } from "vitest";
import { Calendar } from "../../lib/calendar";

test("santissimo nome jesus", () => {
  const calendar = new Calendar(2024);
  expect(calendar.get("2024-01-02")).toMatchObject({
    date: "2024-01-02",
    celebration: [
      {
        date: "2024-01-02",
        flexibility: "tempora",
        name: "Nat2-0",
        rank: 2,
        colors: ["w"],
        id: "tempora:Nat2-0:2:w",
        title: "Santíssimo Nome de Jesus",
        priority: 45,
        weekday: 0,
      },
    ],
    commemoration: [],
    tempora: [],
  });
});
