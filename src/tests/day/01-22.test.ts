import { expect, test, bench } from "vitest";
import { getDay } from "../../lib/getDay";

test("2024-01-22", () => {
  const proper = getDay("2024-01-22");

  expect(proper).toMatchSnapshot();
});
