import { expect, test } from "vitest";
import { getCalendarDay } from "../../getCalendar";

test("S. Gabriel de Nossa Senhora das Dores 2024", () => {
  const calendar = getCalendarDay("2024-02-28");
  expect(calendar).toMatchObject({
    date: "2024-02-28",
    mass: [
      {
        category: "santos",
        color: "w",
        date: "2024-02-28",
        day: 28,
        flexibility: "santos",
        id: "SANCTI_02_28_PORTUGAL",
        link: "missal/santos/02-28-coimbra-lamego-leiria",
        local: "coimbra-lamego-leiria",
        month: 2,
        name: "Trasladação de S. Agostinho, Bispo, Confessor e Doutor",
        outro: false,
        rank: 3,
        type: "sancti",
      },
      {
        category: "santos",
        color: "w",
        day: 27,
        flexibility: "santos",
        id: "SANCTI_02_27",
        link: "missal/santos/02-27",
        month: 2,
        name: "S. Gabriel de Nossa Senhora das Dores",
        outro: false,
        rank: 3,
        type: "sancti",
      },
      {
        category: "quaresma",
        color: "v",
        date: "2024-02-28",
        flexibility: "tempora",
        id: "TEMPORA_QUAD2_3",
        link: "missal/quaresma/quad2-3",
        name: "Quarta-feira da 2ª semana da Quaresma",
        outro: false,
        rank: 3,
        type: "pre-lent-to-pentcost",
        week: 2,
        weekday: 3,
      },
    ],
  });
});

test("S. Gabriel de Nossa Senhora das Dores 2025", () => {
  const calendar = getCalendarDay("2025-02-27");
  expect(calendar).toMatchObject({
    date: "2025-02-27",
    mass: [
      {
        date: "2025-02-27",
        category: "santos",
        color: "w",
        flexibility: "santos",
        id: "SANCTI_02_27",
        link: "missal/santos/02-27",
        name: "S. Gabriel de Nossa Senhora das Dores",
        rank: 3,
        day: 27,
        month: 2,
        outro: false,
        type: "sancti",
      },
      {
        date: "2025-02-27",
        flexibility: "santos",
        id: "SANCTI_02_27_PORTUGAL",
        link: "missal/santos/02-27-portugal",
        local: "portugal",
        name: "S. Torquato, Bispo e Mártir",
        rank: 3,
        category: "santos",
        color: "r",
        day: 27,
        month: 2,
        outro: false,
        type: "sancti",
      },
      {
        category: "pre-quaresma",
        color: "v",
        date: "2025-02-27",
        flexibility: "tempora",
        id: "TEMPORA_QUADP2_4",
        link: "missal/pre-quaresma/quadp2-0",
        name: "Quinta-feira da semana da Sexagésima",
        outro: false,
        rank: 4,
        type: "pre-lent-to-pentcost",
        week: 2,
        weekday: 4,
      },
    ],
  });
});

test("Segunda-feira da 3ª semana da Quaresma", () => {
  const calendar = getCalendarDay("2025-03-24");

  expect(calendar).toMatchObject({
    date: "2025-03-24",
    mass: [
      {
        category: "santos",
        color: "w",
        date: "2025-03-24",
        day: 24,
        flexibility: "santos",
        id: "SANCTI_03_24",
        link: "missal/santos/03-24",
        month: 3,
        name: "S. Gabriel Arcanjo",
        outro: false,
        rank: 3,
        type: "sancti",
      },
      {
        category: "santos",
        color: "w",
        date: "2025-03-24",
        day: 24,
        flexibility: "santos",
        id: "SANCTI_03_24_PORTUGAL",
        link: "missal/santos/03-24-portugal",
        local: "portugal",
        month: 3,
        name: "Festa do Santíssimo Sacramento",
        outro: false,
        rank: 3,
        type: "sancti",
      },
      {
        category: "quaresma",
        color: "v",
        date: "2025-03-24",
        flexibility: "tempora",
        id: "TEMPORA_QUAD3_1",
        link: "missal/quaresma/quad3-1",
        name: "Segunda-feira da 3ª semana da Quaresma",
        outro: false,
        rank: 3,
        type: "pre-lent-to-pentcost",
        week: 3,
        weekday: 1,
      },
    ],
  });
});
