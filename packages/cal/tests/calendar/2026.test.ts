import { afterEach, beforeEach, describe, expect, test } from "vitest";
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

  test("should render the correct calendar", () => {
    const calendar = getCalendar(2026);
    expect(calendar).toMatchSnapshot();
  });

  describe("timezone consistency", () => {
    const timezones = [
      "UTC",
      "America/New_York",
      "America/Los_Angeles",
      "Europe/London",
      "Europe/Berlin",
      "Asia/Tokyo",
      "Australia/Sydney",
      "Pacific/Auckland",
    ];

    test("should produce identical results across all timezones", () => {
      const results = timezones.map((timezone) => {
        setTimezone(timezone);
        return getCalendar(2026);
      });

      const baseResult = results[0];
      results.slice(1).forEach((result) => {
        expect(result).toEqual(baseResult);
      });
    });

    test.each(timezones)("should match main snapshot in %s", (timezone) => {
      setTimezone(timezone);
      const calendar = getCalendar(2026);
      expect(calendar).toMatchSnapshot();
    });
  });

  describe("edge cases across timezones", () => {
    const criticalTimezones = ["UTC", "Pacific/Kiritimati", "Pacific/Niue"];

    test.each(criticalTimezones)(
      "should handle year boundaries correctly in %s",
      (timezone) => {
        setTimezone(timezone);
        const calendar2025 = getCalendar(2025);
        const calendar2026 = getCalendar(2026);

        expect(calendar2025).not.toEqual(calendar2026);
        expect(calendar2026).toMatchSnapshot(
          `year-boundary-2026-${timezone.replace("/", "-")}`
        );
      }
    );
  });
});
