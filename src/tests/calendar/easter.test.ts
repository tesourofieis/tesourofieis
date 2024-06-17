import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("sabado santo", () => {
  const calendar = getCalendarDay("2024-03-30");
  expect(calendar).toMatchSnapshot();
});

test("easter", () => {
  const calendar = getCalendarDay("2024-03-31");
  expect(calendar).toMatchSnapshot();
});

test("segunda pascal", () => {
  const calendar = getCalendarDay("2024-04-01");
  expect(calendar).toMatchSnapshot();
});
