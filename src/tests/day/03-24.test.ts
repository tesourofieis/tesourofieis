import { expect, test } from "vitest";
import { getDay } from "../../lib/getDay";

test("domingo de ramos", () => {
  const proper = getDay("2024-03-24");

  expect(proper).toMatchSnapshot();
});
