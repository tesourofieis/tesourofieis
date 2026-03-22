import { yyyyMMDD } from "./utils";
import type { Day } from "./calendar";

export interface Indulgence {
  month: number;
  day: number;
  hour: number;
  minute: number;
  prayer: string;
  body: string;
  link: string;
}

export const FIXED_INDULGENCES: Indulgence[] = [
  {
    month: 0,
    day: 1,
    hour: 8,
    minute: 0,
    prayer: "Veni Creator",
    body: "Recite publicamente o Veni Creator para o ano novo. (Condições habituais)",
    link: "canticos/sacros/venicreator",
  },
  {
    month: 7,
    day: 2,
    hour: 8,
    minute: 0,
    prayer: "Perdão de Assis",
    body: "Indulgência da Porciúncula: Visite uma igreja paroquial e reze o Pai Nosso e o Credo.",
    link: "",
  },
  {
    month: 10,
    day: 1,
    hour: 8,
    minute: 0,
    prayer: "Todos os Santos",
    body: "Solenidade de Todos os Santos. (Condições habituais)",
    link: "",
  },
  {
    month: 10,
    day: 2,
    hour: 8,
    minute: 0,
    prayer: "Fiéis Defuntos",
    body: "Visite um cemitério e reze pelos defuntos (aplicável apenas às almas).",
    link: "",
  },
  {
    month: 11,
    day: 8,
    hour: 8,
    minute: 0,
    prayer: "Imaculada Conceição",
    body: "Solenidade da Imaculada Conceição de Nossa Senhora.",
    link: "",
  },
  {
    month: 11,
    day: 25,
    hour: 8,
    minute: 0,
    prayer: "Natal do Senhor",
    body: "Solenidade do Natal do Senhor. (Condições habituais)",
    link: "",
  },
  {
    month: 11,
    day: 31,
    hour: 20,
    minute: 0,
    prayer: "Te Deum",
    body: "Recite publicamente o Te Deum em ação de graças pelo ano findo.",
    link: "canticos/sacros/tedeum",
  },
];

export function getMovableIndulgence(dayData?: Day): Indulgence | null {
  const id = dayData?.mass?.[0]?.id || "";

  if (id.includes("TEMPORA_QUAD6_4")) {
    return {
      month: new Date().getMonth(),
      day: new Date().getDate(),
      hour: 8,
      minute: 0,
      prayer: "Tantum Ergo",
      body: "Recite o Tantum Ergo na reposição do Santíssimo.",
      link: "canticos/sacros/tantumergo",
    };
  } else if (id.includes("TEMPORA_QUAD6_5")) {
    return {
      month: new Date().getMonth(),
      day: new Date().getDate(),
      hour: 8,
      minute: 0,
      prayer: "Adoração da Cruz",
      body: "Adore a Cruz na ação litúrgica solene.",
      link: "missal/quaresmoa/quad6-5",
    };
  } else if (id.includes("TEMPORA_PASC7_0")) {
    return {
      month: new Date().getMonth(),
      day: new Date().getDate(),
      hour: 8,
      minute: 0,
      prayer: "Veni Creator",
      body: "Recite o Veni Creator publicamente hoje.",
      link: "canticos/sacros/venicreator",
    };
  } else if (id.includes("TEMPORA_PENT01_4")) {
    return {
      month: new Date().getMonth(),
      day: new Date().getDate(),
      hour: 8,
      minute: 0,
      prayer: "Tantum Ergo",
      body: "Recite o Tantum Ergo na procissão.",
      link: "canticos/sacros/tantumergo",
    };
  } else if (id.includes("TEMPORA_PENT02_5")) {
    return {
      month: new Date().getMonth(),
      day: new Date().getDate(),
      hour: 8,
      minute: 0,
      prayer: "Acto de Reparação",
      body: "Recite o Ato de Reparação (Iesu Dulcissime).",
      link: "devocionario/oracoes/actoreparacao",
    };
  } else if (id.includes("SANCTI_10_DUR")) {
    return {
      month: new Date().getMonth(),
      day: new Date().getDate(),
      hour: 8,
      minute: 0,
      prayer: "Acto de Consagração",
      body: "Recite o Acto de Consagração do Gênero Humano.",
      link: "devocionario/oracoes/consagracaosagradocoracaojesus",
    };
  }

  return null;
}

export function getTodaysIndulgences(calendar: Day[], date: Date): Indulgence[] {
  const today = new Date();
  const currentYear = today.getFullYear();
  const indulgences: Indulgence[] = [];

  // Check fixed date indulgences
  for (const indulgence of FIXED_INDULGENCES) {
    const indulgenceDate = new Date(
      currentYear,
      indulgence.month,
      indulgence.day,
      indulgence.hour,
      indulgence.minute,
    );

    // Check if it's today (within a reasonable time window)
    const now = new Date();
    const timeDiff = Math.abs(now.getTime() - indulgenceDate.getTime());
    const hoursDiff = timeDiff / (1000 * 60 * 60);

    if (hoursDiff <= 24) {
      indulgences.push(indulgence);
    }
  }

  // Check movable indulgences based on calendar
  const dayData = calendar.find((d) => d.date === yyyyMMDD(date));
  const movableIndulgence = getMovableIndulgence(dayData);

  if (movableIndulgence) {
    indulgences.push(movableIndulgence);
  }

  return indulgences;
}
