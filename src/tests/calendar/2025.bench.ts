import { bench, describe } from "vitest";
import { getCalendar } from "../../lib/getCalendar";

describe("calendar 2025", () => {
  bench("calendar", () => {
    getCalendar(2025);
  });
});
