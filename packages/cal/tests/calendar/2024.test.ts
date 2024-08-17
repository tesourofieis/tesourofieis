import { describe, expect, test } from "vitest";
import { getCalendar } from "../../getCalendar";

describe("calendar 2024", () => {
  test("renders entire calendar correctly", () => {
    const calendar = getCalendar(2024);

    expect(calendar).toMatchSnapshot();
  });
});
