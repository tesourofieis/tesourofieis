import { expect, test } from "vitest";
import { getCalendarDay } from "../../getCalendar";

test("santissimo nome jesus", () => {
  expect(getCalendarDay("2024-01-02")).toMatchObject({
    date: "2024-01-02",
    mass: [
      {
        date: "2024-01-02",
        flexibility: "tempora",
        link: "missal/natal/nat2-0",
        rank: 2,
        color: "w",
        id: "TEMPORA_NAT2_0",
        name: "Santíssimo Nome de Jesus",
      },
      {
        color: "r",
        date: "2024-01-02",
        flexibility: "santos",
        id: "SANCTI_01_02",
        link: "missal/santos/01-02",
        rank: 3,
        name: "Oitava de S. Estevão, Mártir",
      },
    ],
  });
});
