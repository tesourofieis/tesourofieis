import { bench, describe } from "vitest";
import { getCalendar } from "../../lib/getCalendar";
import { getDay } from "../../lib/getDay";

describe.skip("day", () => {
  const calendar = getCalendar(new Date().getFullYear());

  Object.entries(calendar).map(([calendarDate]) => {
    bench(`bench ${calendarDate}`, () => {
      getDay(calendarDate);
    });
  });
});

describe.each(["2024-11-02", "2024-11-13", "2024-03-30"])(
  "slowest days %s",
  (day) => {
    bench(`run ${day}`, () => {
      getDay(day);
    });
  },
);

describe.each(["2024-01-07", "2024-03-03", "2024-02-25"])(
  "fastest days %s",
  (day) => {
    bench(`run ${day}`, () => {
      getDay(day);
    });
  },
);
