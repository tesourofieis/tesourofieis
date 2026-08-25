import { describe, expect, test } from "bun:test";
import { getCalendar } from "../../getCalendar";

// No explicit edition: pins the app default (Rubrics 1960 / "62").
describe("calendar 2025 (default edition)", () => {
  test("renders entire calendar correctly", () => {
    expect(getCalendar(2025)).toMatchSnapshot();
  });
});
