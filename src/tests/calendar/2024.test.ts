import { describe, expect, test } from "vitest";
import { printAll } from "../../lib/utils";
import { getCalendar } from "../../lib/getCalendar";

describe("calendar", () => {
  test("renders entire calendar correctly", () => {
    const calendar = getCalendar(2024);

    expect(printAll(calendar)).toMatchSnapshot();
  });
});
