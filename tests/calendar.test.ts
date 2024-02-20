import { describe, test, expect } from "vitest";
import { Calendar } from "../src/lib/calendar";

describe("calendar", () => {
  test("easter", () => {
    const calendar = new Calendar(2024);
    expect(calendar.get("2024-03-30")).toMatchObject({
      celebration: [
        {
          colors: ["v", "w"],
          date: "2024-03-30",
          flexibility: "tempora",
          id: "tempora:Quad6-6r:1:vw",
          name: "Quad6-6r",
          priority: 7,
          rank: 1,
          title: "Sábado Santo",
          weekday: 6,
        },
      ],
      commemoration: [],
      tempora: [
        {
          colors: ["v", "w"],
          date: "2024-03-30",
          flexibility: "tempora",
          id: "tempora:Quad6-6r:1:vw",
          name: "Quad6-6r",
          priority: 7,
          rank: 1,
          title: "Sábado Santo",
          weekday: 6,
        },
      ],
    });
    expect(calendar.get("2024-03-31")).toMatchObject({
      celebration: [
        {
          colors: ["w"],
          id: "tempora:Pasc0-0:1:w",
          date: "2024-03-31",
          flexibility: "tempora",
          name: "Pasc0-0",
          priority: 3,
          rank: 1,
          title: "Domingo da Ressurreição",
          weekday: 0,
        },
      ],
      commemoration: [],
      tempora: [
        {
          colors: ["w"],
          id: "tempora:Pasc0-0:1:w",
          rank: 1,
          title: "Domingo da Ressurreição",
          weekday: 0,
        },
      ],
    });
    expect(calendar.get("2024-04-01")).toMatchObject({
      celebration: [
        {
          colors: ["w"],
          date: "2024-04-01",
          flexibility: "tempora",
          id: "tempora:Pasc0-1:1:w",
          name: "Pasc0-1",
          priority: 29,
          rank: 1,
          title: "Segunda-feira Pascal",
          weekday: 1,
        },
      ],
      commemoration: [],
      tempora: [
        {
          colors: ["w"],
          date: "2024-04-01",
          flexibility: "tempora",
          id: "tempora:Pasc0-1:1:w",
          name: "Pasc0-1",
          priority: 29,
          rank: 1,
          title: "Segunda-feira Pascal",
          weekday: 1,
        },
      ],
    });
  });

  test("imaculada conceicao", () => {
    const calendar = new Calendar(2024);
    expect(calendar.get("2024-12-08")).toMatchObject({
      date: "2024-12-08",
      celebration: [
        {
          colors: ["w"],
          date: "2024-12-08",
          flexibility: "sancti",
          id: "sancti:12-08:1:w",
          name: "12-08",
          priority: 14,
          rank: 1,
          title: "Imaculada Conceição da SS. Virgem",
        },
      ],
      commemoration: [
        {
          colors: ["v"],
          id: "tempora:Adv2-0:1:v",
          rank: 1,
          title: "2º Domingo do Advento",
          weekday: 0,
        },
      ],
      tempora: [
        {
          colors: ["v"],
          date: "2024-12-08",
          flexibility: "tempora",
          id: "tempora:Adv2-0:1:v",
          name: "Adv2-0",
          priority: 18,
          rank: 1,
          title: "2º Domingo do Advento",
          weekday: 0,
        },
      ],
    });
  });

  test("S. Gabriel de Nossa Senhora das Dores 2024", () => {
    const calendar = new Calendar(2024);
    expect(calendar.get("2024-02-28")).toMatchObject({
      celebration: [
        {
          colors: ["v"],
          date: "2024-02-28",
          flexibility: "tempora",
          id: "tempora:Quad2-3:3:v",
          name: "Quad2-3",
          priority: 57,
          rank: 3,
          title: "Quarta-feira da 2ª semana da Quaresma",
        },
      ],
      commemoration: [
        {
          colors: ["w"],
          date: "2024-02-27",
          flexibility: "sancti",
          id: "sancti:02-27:3:w",
          name: "02-27",
          priority: 79,
          rank: 3,
          title: "S. Gabriel de Nossa Senhora das Dores",
          weekday: 2,
        },
      ],
      tempora: [
        {
          colors: ["v"],
          date: "2024-02-28",
          flexibility: "tempora",
          id: "tempora:Quad2-3:3:v",
          name: "Quad2-3",
          priority: 57,
          rank: 3,
          title: "Quarta-feira da 2ª semana da Quaresma",
          weekday: 3,
        },
      ],
    });

    expect(calendar.get("2024-03-24")).toMatchObject({
      date: "2024-03-24",
      celebration: [
        {
          colors: ["r", "v"],
          date: "2024-03-24",
          flexibility: "tempora",
          id: "tempora:Quad6-0r:1:rv",
          name: "Quad6-0r",
          priority: 19,
          rank: 1,
          title: "Domingo de Ramos",
          weekday: 0,
        },
      ],
      commemoration: [],
      tempora: [
        {
          colors: ["r", "v"],
          date: "2024-03-24",
          flexibility: "tempora",
          id: "tempora:Quad6-0r:1:rv",
          name: "Quad6-0r",
          priority: 19,
          rank: 1,
          title: "Domingo de Ramos",
          weekday: 0,
        },
      ],
    });
  });

  test("S. Gabriel de Nossa Senhora das Dores 2025", () => {
    const calendar = new Calendar(2025);
    expect(calendar.get("2025-02-27")).toMatchObject({
      date: "2025-02-27",
      celebration: [
        {
          colors: ["w"],
          date: "2025-02-27",
          flexibility: "sancti",
          id: "sancti:02-27:3:w",
          name: "02-27",
          priority: 79,
          rank: 3,
          title: "S. Gabriel de Nossa Senhora das Dores",
          weekday: 4,
        },
      ],
      commemoration: [],
      tempora: [
        {
          colors: ["v"],
          date: "2025-02-27",
          id: "tempora:Quadp2-4:4:v",
          name: "Quadp2-4",
          priority: 80,
          rank: 4,
          title: "Quinta-feira da semana da Sexagésima",
          weekday: 4,
        },
      ],
    });

    expect(calendar.get("2025-03-24")).toMatchObject({
      date: "2025-03-24",
      celebration: [
        {
          colors: ["v"],
          date: "2025-03-24",
          flexibility: "tempora",
          id: "tempora:Quad3-1:3:v",
          name: "Quad3-1",
          priority: 61,
          rank: 3,
          title: "Segunda-feira da 3ª semana da Quaresma",
          weekday: 1,
        },
      ],
      commemoration: [
        {
          colors: ["w"],
          date: "2025-03-24",
          flexibility: "sancti",
          id: "sancti:03-24:3:w",
          name: "03-24",
          priority: 79,
          rank: 3,
          title: "S. Gabriel Arcanjo",
          weekday: 1,
        },
      ],
      tempora: [
        {
          colors: ["v"],
          date: "2025-03-24",
          flexibility: "tempora",
          id: "tempora:Quad3-1:3:v",
          name: "Quad3-1",
          priority: 61,
          rank: 3,
          title: "Segunda-feira da 3ª semana da Quaresma",
          weekday: 1,
        },
      ],
    });
  });

  test("Anunciação de Nossa Senhora 2024", () => {
    const calendar = new Calendar(2024);
    expect(calendar.get("2024-04-08")).toMatchObject({
      date: "2024-04-08",
      celebration: [
        {
          colors: ["w"],
          id: "sancti:03-25:1:w",
          rank: 1,
          title: "Anunciação de Nossa Senhora",
        },
      ],
      commemoration: [],
      tempora: [
        {
          colors: ["w"],
          date: "2024-04-08",
          flexibility: "tempora",
          id: "tempora:Pasc1-1:4:w",
          name: "Pasc1-1",
          priority: 80,
          rank: 4,
          title: "Segunda-feira da 1º semana depois da Páscoa",
          weekday: 1,
        },
      ],
    });
  });

  test("Anunciação de Nossa Senhora 2025", () => {
    const calendar = new Calendar(2025);
    expect(calendar.get("2025-03-25")).toMatchObject({
      date: "2025-03-25",
      celebration: [
        {
          colors: ["w"],
          date: "2025-03-25",
          flexibility: "sancti",
          id: "sancti:03-25:1:w",
          name: "03-25",
          priority: 41,
          rank: 1,
          title: "Anunciação de Nossa Senhora",
          weekday: 2,
        },
      ],
      commemoration: [
        {
          colors: ["v"],
          date: "2025-03-25",
          flexibility: "tempora",
          id: "tempora:Quad3-2:3:v",
          name: "Quad3-2",
          priority: 62,
          rank: 3,
          title: "Terça-feira da 3ª semana da Quaresma",
          weekday: 2,
        },
      ],
      tempora: [
        {
          colors: ["v"],
          date: "2025-03-25",
          flexibility: "tempora",
          id: "tempora:Quad3-2:3:v",
          name: "Quad3-2",
          priority: 62,
          rank: 3,
          title: "Terça-feira da 3ª semana da Quaresma",
          weekday: 2,
        },
      ],
    });
  });

  test("santissimo nome jesus", () => {
    const calendar = new Calendar(2024);
    expect(calendar.get("2024-01-02")).toMatchObject({
      date: "2024-01-02",
      celebration: [
        {
          date: "2024-01-02",
          flexibility: "tempora",
          name: "Nat2-0",
          rank: 2,
          colors: ["w"],
          id: "tempora:Nat2-0:2:w",
          title: "Santíssimo Nome de Jesus",
          priority: 45,
          weekday: 0,
        },
      ],
      commemoration: [],
      tempora: [],
    });
  });

  test("no celebration when tempora", () => {
    const calendar = new Calendar(2024);
    expect(calendar.get("2024-01-08")).toMatchObject({
      date: "2024-01-08",
      celebration: [],
      commemoration: [],
      tempora: [
        {
          colors: ["w"],
          date: "2024-01-08",
          flexibility: "tempora",
          id: "tempora:Epi1-1:4:w",
          name: "Epi1-1",
          priority: 80,
          rank: 4,
          title: "Segunda-feira da semana após a Epifania",
          weekday: 1,
        },
      ],
    });
  });
});
