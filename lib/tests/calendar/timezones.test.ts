import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { getCalendar } from "../../getCalendar";

describe("calendar 2026", () => {
  let originalTimezone: string;

  beforeEach(() => {
    originalTimezone = process.env.TZ || "";
  });

  afterEach(() => {
    process.env.TZ = originalTimezone;
  });

  const setTimezone = (timezone: string) => {
    process.env.TZ = timezone;
  };

  describe("timezone consistency", () => {
    const timezones = [
      "UTC",
      "America/Bahia",
      "Europe/Lisbon",
      "Asia/Macau",
      "Africa/Sao_Tome",
      "Atlantic/Cape_Verde",
    ];

    test("should produce identical results across all timezones", () => {
      const results = timezones.map((timezone) => {
        setTimezone(timezone);
        return getCalendar(2026);
      });

      const [baseResult, ...otherResults] = results;
      if (!baseResult) throw new Error("expected at least one timezone result");
      otherResults.forEach((result) => {
        expect(result).toEqual(baseResult);
      });
    });
  });
});
