import { getCalendar } from "../../../../lib/getCalendar";
import { format_propers, yyyyMMDD } from "../../../../lib/src/utils";

export async function GET({ params, request }) {
  const date = params.date;
  const calendar = getCalendar(new Date(date).getFullYear());
  const day = calendar.get(date);
  const proper = day?.getProper(calendar);
  const format = format_propers(proper);
  return new Response(
    JSON.stringify({
      calendar: calendar.serialize(),
      proper: format,
    }),
  );
}

export function getStaticPaths() {
  const calendar = getCalendar(new Date().getFullYear());

  return Object.entries(calendar.serialize()).map(([date]) => ({
    params: { date: date },
  }));
}
