import { getCalendar, getDate } from "./entrypoint.ts";
import { addDays, getYear } from "date-fns";
import { yyyyMMDD } from "./src/utils.ts";
import { test, expect } from "vitest";

test("getDate should return the proper of the day for 2024", () => {
  const firstDate = "2024-01-01";
  let date = new Date(firstDate);

  const propers = [];

  while (getYear(date) === getYear(firstDate)) {
    propers.push(getDate(yyyyMMDD(date)));
    date = addDays(date, 1);
  }

  expect(propers).toMatchSnapshot();
});

test("getCalendary should return the calendar for 2024", () => {
  let date = "2024-01-01";

  const calendar = getCalendar(getYear(date));

  expect(calendar).toMatchSnapshot();
});