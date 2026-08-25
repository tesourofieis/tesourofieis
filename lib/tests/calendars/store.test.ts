import { expect, test } from "bun:test";
import { CalendarStore } from "../../calendarStore";

test("returns the same instance per year+edition", () => {
  const store = new CalendarStore();
  const calendar = store.getOrCreate(2026, "62");
  expect(store.getOrCreate(2026, "62")).toBe(calendar);
});

test("editions do not collide", () => {
  const store = new CalendarStore();
  const pre55 = store.getOrCreate(2026, "pre-55");
  const m62 = store.getOrCreate(2026, "62");
  expect(store.size).toBe(2);
  expect(pre55).not.toBe(m62);
});

test("evicts least-recently-used beyond capacity", () => {
  const store = new CalendarStore(3);
  const evicted = store.getOrCreate(2024, "62"); // oldest
  const kept = store.getOrCreate(2025, "62");
  store.getOrCreate(2026, "62");

  // Touch 2025 so 2024 becomes the least-recently-used entry
  expect(store.getDay("2025-06-01", "62")).toBeDefined();

  store.getOrCreate(2027, "62");

  expect(store.size).toBe(3);
  expect(store.getOrCreate(2024, "62")).not.toBe(evicted);
  expect(store.getOrCreate(2025, "62")).toBe(kept);
});

test("queries resolve through the cached calendar", () => {
  const store = new CalendarStore();
  const day = store.getDay("2026-03-25", "62");
  expect(day?.date).toBe("2026-03-25");
  expect(store.getSeason("2026-12-25", "62")).toBeDefined();
});

test("clear empties the cache", () => {
  const store = new CalendarStore();
  store.getOrCreate(2026, "62");
  store.clear();
  expect(store.size).toBe(0);
});
