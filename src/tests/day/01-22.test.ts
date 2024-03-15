import { expect, test, bench } from "vitest";
import { getDay } from "../../lib/getDay";

test("2024-01-22", () => {
  const t1 = performance.now();
  const proper = getDay("2024-01-22");
  const t2 = performance.now();

  expect(proper).toMatchSnapshot();

  // how fast in millisiconds
  expect(t2 - t1).toBeLessThan(80);
});

bench("2024-01-22", () => {
  getDay("2024-01-22");
});
