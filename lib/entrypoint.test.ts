import { expect, test } from "bun:test";
import { getCalendar, getDate } from "./entrypoint.ts";
import { addDays, getYear } from "date-fns";
import { yyyyMMDD } from "./utils.ts";

test("getDate should return the proper of the day", () => {
  const firstDate = "2023-01-01";
  let date = new Date(firstDate);

  const propers = [];

  while (getYear(date) === getYear(firstDate)) {
    propers.push(getDate(yyyyMMDD(date)));
    date = addDays(date, 1);
  }

  expect(propers).toMatchSnapshot();
});

test("getCalendary should return the calendar", () => {
  let date = "2023-01-01";

  const calendar = getCalendar(getYear(date));

  expect(calendar).toMatchSnapshot();
});
