import { expect, test } from "bun:test";
import { getCalendarDay } from "../../getCalendar";

test("imaculada conceicao", () => {
  const calendar = getCalendarDay("2024-12-08", "pre-55");
  expect(calendar).toMatchObject({
    date: "2024-12-08",
    mass: [
      {
        date: "2024-12-08",
        flexibility: "tempora",
        id: "TEMPORA_ADV2_0",
        link: "missal/advento/adv2-0",
        name: "2º Domingo do Advento",
        rank: 1,
      },
          {
        date: "2024-12-08",
        flexibility: "santos",
        id: "SANCTI_12_08",
        link: "missal/santos/12-08",
        name: "Imaculada Conceição da SS. Virgem",
        rank: 1,
      },
],
  });
});
