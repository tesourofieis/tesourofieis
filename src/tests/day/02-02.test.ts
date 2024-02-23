import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("2024-02-02", () => {
  const proper = getDay("2024-02-02");

  expect(proper).toMatchSnapshot();
});
