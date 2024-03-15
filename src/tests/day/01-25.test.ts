import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("2024-02-25", () => {
  const proper = getDay("2024-02-25");

  expect(proper).toMatchSnapshot();
});
