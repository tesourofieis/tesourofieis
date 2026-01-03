import { describe, expect, test } from "vitest";
import { getCalendar } from "../../getCalendar";

describe("calendar 2026", () => {
  test("should render the correct calendar", () => {
    const calendar = getCalendar(2026);

    expect(calendar).toMatchSnapshot();
  });
});
