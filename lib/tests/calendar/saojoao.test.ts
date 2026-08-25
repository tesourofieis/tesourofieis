import { expect, test } from "bun:test";
import { getCalendarDay } from "../../getCalendar";

test("test dates all over the world", () => {
  const calendar = getCalendarDay("2024-06-24", "pre-55");
  expect(calendar).toMatchObject({
    date: "2024-06-24",
    mass: [
      {
        category: "santos",
        color: "w",
        date: "2024-06-24",
        day: 24,
        flexibility: "santos",
        id: "SANCTI_06_24",
        link: "missal/santos/06-24",
        month: 6,
        name: "Nascimento de S. João Baptista",
        novena: true,
        rank: 1,
        type: "sancti",
      },
      {
        category: "pentecostes",
        color: "g",
        date: "2024-06-24",
        flexibility: "tempora",
        id: "TEMPORA_PENT05_1",
        link: "missal/pentecostes/pent5-0",
        name: "Segunda-feira da 5ª semana depois de Pentecostes",
        rank: 4,
        type: "pre-lent-to-pentcost",
        week: 5,
        weekday: 1,
      },
    ],
  });
});
