import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("quinta feira santa", () => {
  const proper = getDay("2024-03-28");

  expect(proper).toMatchSnapshot();
});
