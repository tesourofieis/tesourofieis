import { expect, test } from "vitest";
import { getCalendarDay } from "../../lib/getCalendar";

test("S. Gabriel de Nossa Senhora das Dores 2024", () => {
  const calendar = getCalendarDay("2024-02-28");
  expect(calendar).toMatchSnapshot();
});

test("S. Gabriel de Nossa Senhora das Dores 2025", () => {
  const calendar = getCalendarDay("2025-02-27");
  expect(calendar).toMatchSnapshot();
});

test("Segunda-feira da 3ª semana da Quaresma", () => {
  const calendar = getCalendarDay("2025-03-24");
  expect(calendar).toMatchSnapshot();
});
