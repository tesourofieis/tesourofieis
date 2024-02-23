import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("2024-03-28", () => {
  const proper = getDay("2024-03-28");

  expect(proper).toMatchSnapshot();
});
