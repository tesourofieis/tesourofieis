import { describe, expect, test } from "bun:test";
import { getCalendar } from "../../getCalendar";

// No explicit edition: pins the app default (Rubrics 1960 / "62").
describe("calendar 2024 (default edition)", () => {
  test("renders entire calendar correctly", () => {
    expect(getCalendar(2024)).toMatchSnapshot();
  });
});
