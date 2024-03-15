import { bench, describe } from "vitest";
import { getDay } from "../../lib/getDay";

describe("2024-01-22", () => {
  bench("day", () => {
    getDay("2024-01-22");
  });
});
