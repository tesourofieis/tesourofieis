import { describe, expect, test } from "vitest";
import { getCalendar } from "../../getCalendar";

describe("calendar 2025", () => {
  test("should render the correct calendar", () => {
    const calendar = getCalendar(2025);

    expect(calendar).toMatchSnapshot();
  });
});
