import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("imaculada conceicao", () => {
  const calendar = getCalendarDay("2024-12-08");
  expect(calendar).toMatchSnapshot();
});
