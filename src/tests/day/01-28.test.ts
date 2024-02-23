import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("2024-01-28", () => {
  const proper = getDay("2024-01-28");

  expect(proper).toMatchSnapshot();
});
