import { bench, describe } from "vitest";
import { getDay } from "../../lib/getDay";
import { getCalendar } from "../../lib/getCalendar";

describe("day", () => {
  const calendar = getCalendar(new Date().getFullYear());

  Object.entries(calendar).map(([calendarDate], i) => {
    if (i < 31) {
      bench(`bench ${calendarDate}`, () => {
        getDay(calendarDate);
      });
    }
  });
});
