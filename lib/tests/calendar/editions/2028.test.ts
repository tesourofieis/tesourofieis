import { describe, expect, test } from "bun:test";
import { getCalendar } from "../../../getCalendar";

describe.each([
  ["pre-55"],
  ["62"],
] as const)("calendar %s 2028", (edition) => {
  test("renders the full year", () => {
    expect(getCalendar(2028, edition)).toMatchSnapshot();
  });
});
