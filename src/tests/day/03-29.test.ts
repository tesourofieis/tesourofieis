import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("sexta feira santa", () => {
  const proper = getDay("2024-03-29");

  expect(proper).toMatchSnapshot();
});
