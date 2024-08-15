import { bench, describe } from "vitest";
import { getCalendar } from "../../lib/getCalendar";

describe("calendar", () => {
  bench("2024", () => {
    getCalendar(2024);
  });

  bench("2025", () => {
    getCalendar(2025);
  });
});
