import { describe, expect, test } from "vitest";
import { getCalendar } from "../../lib/getCalendar";
import { printAll } from "../../lib/utils";

describe("calendar 2025", () => {
  test("should render the correct calendar", () => {
    const t1 = performance.now();
    const calendar = getCalendar(2025);
    const t2 = performance.now();

    expect(printAll(calendar)).toMatchSnapshot();

    // how fast in millisiconds
    expect(t2 - t1).toBeLessThan(70);
  });
});
