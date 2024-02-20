import { expect, test } from "vitest";
import { Calendar } from "../src/lib/calendar";
import { format_propers } from "../src/lib/utils";

test("2024-12-25", () => {
  const calendar = new Calendar(2024);

  const day = calendar.get("2024-12-25");

  const propers = day?.getProper(calendar);

  // const formated = format_propers(proper);
  //
  console.log(propers);

  expect(propers).toMatchObject({
    info: {},
    sections: [],
  });
});
