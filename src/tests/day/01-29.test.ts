import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("2024-01-29", () => {
  const proper = getDay("2024-01-29");

  expect(proper).toMatchSnapshot();
});
