import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("no celebration when tempora", () => {
  const calendar = getCalendarDay("2024-01-08");
  expect(calendar).toMatchSnapshot();
});
