import { describe, expect, test } from "vitest";
import { getCalendar } from "../../lib/getCalendar";

describe.skip("calendar", () => {
  test("renders entire calendar correctly", () => {
    const calendar = getCalendar(2024);

    expect(calendar).toMatchSnapshot();
  });
});
