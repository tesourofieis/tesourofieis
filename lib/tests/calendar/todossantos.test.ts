import { expect, test } from "bun:test";

import { getCalendarDay } from "../../getCalendar";

test("todos os santos", () => {
  const calendar = getCalendarDay("2025-11-01", "pre-55");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "santos",
        color: "w",
        date: "2025-11-01",
        day: 1,
        flexibility: "santos",
        id: "SANCTI_11_01",
        link: "missal/santos/11-01",
        month: 11,
        name: "Todos os Santos",
        novena: true,
        rank: 1,
        type: "sancti",
      },
      {
        category: "pentecostes",
        color: "g",
        date: "2025-11-01",
        flexibility: "tempora",
        id: "TEMPORA_PENT20_6",
        link: "missal/pentecostes/pent20-0",
        name: "Sábado da 20ª semana depois de Pentecostes",
        rank: 4,
        type: "pre-lent-to-pentcost",
        week: 20,
        weekday: 6,
      },
    ],
  });
});

test("segundo dia após todos os santos", () => {
  const calendar = getCalendarDay("2025-11-02", "pre-55");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "pentecostes",
        color: "g",
        date: "2025-11-02",
        flexibility: "tempora",
        id: "TEMPORA_PENT21_0",
        link: "missal/pentecostes/pent21-0",
        name: "21º Domingo depois de Pentecostes",
        rank: 2,
        type: "pre-lent-to-pentcost",
        weekday: 0,
      },
    ],
  });
});

test("terceiro dia após todos os santos", () => {
  const calendar = getCalendarDay("2025-11-03", "pre-55");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "santos",
        color: "b",
        date: "2025-11-02",
        day: 2,
        flexibility: "santos",
        id: "SANCTI_11_02",
        link: "missal/santos/11-02",
        month: 11,
        name: "Comemoração dos Fiéis Defuntos",
        rank: 1,
        type: "sancti",
      },
    ],
  });
});
