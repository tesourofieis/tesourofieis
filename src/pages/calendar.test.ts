import { describe, test, expect } from "vitest";
import { buildCalendar } from "../src/pages/missa/calendar/calendar";

describe("Given a year", () => {
  describe("When I build the calendar", () => {
    test("Then I want to see the calendar", () => {
      expect(buildCalendar(2022)).toBe(2024);
    });
  });
});
