import { getCalendar } from "../../../../../lib/getCalendar.ts";

export const prerender = false;

export async function GET({ params }) {
  const date = params.date;
  const calendar = getCalendar(Number(date));
  return new Response(
    JSON.stringify({
      calendar: calendar.serialize(),
    }),
  );
}
