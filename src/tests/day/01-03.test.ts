import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("2024-01-03", () => {
  const proper = getDay("2024-01-03");

  expect(proper).toMatchSnapshot();
});
