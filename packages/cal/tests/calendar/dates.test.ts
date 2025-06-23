import { expect, test, vi } from "vitest";
import { getCalendarDay, getCalendar } from "../../getCalendar";
import { Calendar } from "../../calendar";
import { yyyyMMDD } from "../../utils";
import { getYear } from "date-fns";

test("diagnostic: Calendar class timezone sensitivity", () => {
  console.log("Current timezone:", Intl.DateTimeFormat().resolvedOptions().timeZone);
  console.log("Current time:", new Date().toISOString());
  console.log("Current local date string:", yyyyMMDD());
  
  // Test Calendar class directly
  const calendar2024 = new Calendar(2024);
  const june24 = calendar2024.get("2024-06-24");
  
  console.log("Calendar.get result:", {
    date: june24.date,
    massCount: june24.mass.length,
    massIds: june24.mass.map(m => m.id)
  });
  
  expect(june24.date).toBe("2024-06-24");
});

test("diagnostic: getCalendarDay vs Calendar.get", () => {
  // Compare both approaches
  const directCalendar = new Calendar(2024).get("2024-06-24");
  const throughFunction = getCalendarDay("2024-06-24");
  
  console.log("Direct Calendar.get:", {
    date: directCalendar.date,
    massCount: directCalendar.mass.length
  });
  
  console.log("Through getCalendarDay:", {
    date: throughFunction.date,
    massCount: throughFunction.mass.length
  });
  
  expect(directCalendar.date).toBe(throughFunction.date);
  expect(directCalendar.mass.length).toBe(throughFunction.mass.length);
});

test("diagnostic: year extraction from date strings", () => {
  const testDate = "2024-06-24";
  const yearFromString = getYear(testDate);
  const yearFromDate = getYear(new Date("2024-06-24"));
  
  console.log("Year from string:", yearFromString);
  console.log("Year from Date object:", yearFromDate);
  console.log("Current timezone offset:", new Date().getTimezoneOffset());
  
  expect(yearFromString).toBe(2024);
  expect(yearFromDate).toBe(2024);
});

test("diagnostic: Calendar constructor with current year", () => {
  const currentYear = new Date().getFullYear();
  console.log("Current year:", currentYear);
  
  try {
    const currentCalendar = new Calendar(currentYear);
    const allDays = currentCalendar.getAllDays();
    console.log("Calendar created successfully, days count:", allDays.length);
    expect(allDays.length).toBeGreaterThan(0);
  } catch (error) {
    console.error("Calendar creation failed:", error);
    throw error;
  }
});

test("diagnostic: Date parsing behavior", () => {
  const dateStr = "2024-06-24";
  const parsedDate = new Date(dateStr);
  const parsedISO = new Date(dateStr + "T00:00:00.000Z");
  
  console.log("Original string:", dateStr);
  console.log("new Date(string):", parsedDate.toISOString());
  console.log("new Date(string + UTC):", parsedISO.toISOString());
  console.log("Local date from parsed:", yyyyMMDD(parsedDate));
  console.log("Local date from ISO:", yyyyMMDD(parsedISO));
});
