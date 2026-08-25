import { describe, expect, test } from "bun:test";
import { getCalendar } from "../../../getCalendar";

describe("calendar 2026 under Rubrics 1960", () => {
  test("renders the full year", () => {
    expect(getCalendar(2026, "62")).toMatchSnapshot();
  });
});
