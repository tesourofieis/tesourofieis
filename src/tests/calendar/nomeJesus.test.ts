import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("santissimo nome jesus", () => {
  expect(getCalendarDay("2024-01-02")).toMatchSnapshot();
});
