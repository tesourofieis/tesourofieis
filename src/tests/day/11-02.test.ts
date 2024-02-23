import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("2024-11-02", () => {
  const proper = getDay("2024-11-02");

  expect(proper).toMatchSnapshot();
});
