import { expect, test } from "bun:test";

import { getCalendarDay } from "../../getCalendar";

test("vigilia natal", () => {
  const calendar = getCalendarDay("2024-12-24", "pre-55");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "santos",
        color: "v",
        date: "2024-12-24",
        day: 24,
        flexibility: "santos",
        id: "SANCTI_12_24",
        link: "missal/santos/12-24",
        month: 12,
        name: "Vigília Natal de N. S. Jesus Cristo",
        rank: 1,
        type: "sancti",
      },
    ],
  });
});

test("natal", () => {
  const calendar = getCalendarDay("2024-12-25", "pre-55");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "santos",
        color: "w",
        day: 25,
        flexibility: "santos",
        id: "SANCTI_12_25_1",
        link: "missal/santos/12-25-0",
        month: 12,
        name: "Missa da Noite de Natal de N. S. Jesus Cristo",
        rank: 1,
        type: "sancti",
      },
      {
        category: "santos",
        color: "w",
        day: 25,
        flexibility: "santos",
        id: "SANCTI_12_25_2",
        link: "missal/santos/12-25-1",
        month: 12,
        name: "Missa da Aurora de Natal de N. S. Jesus Cristo",
        rank: 1,
        type: "sancti",
      },
      {
        category: "santos",
        color: "w",
        day: 25,
        flexibility: "santos",
        id: "SANCTI_12_25_3",
        link: "missal/santos/12-25-2",
        month: 12,
        name: "Missa do Dia de Natal de N. S. Jesus Cristo",
        rank: 1,
        type: "sancti",
      },
    ],
  });
});

test("natal 31", () => {
  const calendar = getCalendarDay("2024-12-31", "pre-55");
  expect(calendar).toMatchObject({
    mass: [
      {
        category: "santos",
        color: "w",
        date: "2024-12-31",
        day: 31,
        flexibility: "santos",
        id: "SANCTI_12_31",
        link: "missal/santos/12-31",
        month: 12,
        name: "S. Silvestre, Papa e Confessor",
        // DO Kalendaria pre-55 grade (Semiduplex, 3.0); the legacy data
        // said 4 - corrected to match divinum-officium.
        rank: 3,
        type: "sancti",
      },
    ],
  });
});
