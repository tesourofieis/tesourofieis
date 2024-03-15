import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("2024-10-27", () => {
  const proper = getDay("2024-10-27");

  expect(proper).toMatchSnapshot();
});
