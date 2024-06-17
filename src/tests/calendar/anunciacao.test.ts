import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("Anunciação de Nossa Senhora 2024", () => {
  const calendar = getCalendarDay("2024-04-08");
  expect(calendar).toMatchSnapshot();
});

test("Anunciação de Nossa Senhora 2025", () => {
  const calendar = getCalendarDay("2025-03-25");
  expect(calendar).toMatchSnapshot();
});
