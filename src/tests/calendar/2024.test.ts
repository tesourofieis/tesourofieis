import { describe, expect, test } from "vitest";
import { getCalendar } from "../../lib/getCalendar";
import { printAll } from "../../lib/utils";

describe("calendar", () => {
  test("renders entire calendar correctly", () => {
    const calendar = getCalendar(2024);

    expect(printAll(calendar)).toMatchSnapshot();
  });
});
