import { describe, expect, test } from "bun:test";
import { getCalendar } from "../../../getCalendar";

describe("calendar 2026 under pre-55 rubrics", () => {
  test("renders the full year", () => {
    expect(getCalendar(2026, "pre-55")).toMatchSnapshot();
  });
});
