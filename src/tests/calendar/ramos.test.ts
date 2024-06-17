import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("Domingo de Ramos", () => {
  const calendar = getCalendarDay("2024-03-24");
  expect(calendar).toMatchSnapshot();
});
