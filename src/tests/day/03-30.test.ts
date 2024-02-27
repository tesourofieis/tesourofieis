import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("sabado santo", () => {
  const proper = getDay("2024-03-30");

  expect(proper).toMatchSnapshot();
});
