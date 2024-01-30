import { getCalendar } from "../../../../lib/getCalendar";
import { format_propers } from "../../../../lib/utils";

export const prerender = false;

export async function GET({ params }) {
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
    {
      status: 200,
    },
  );
}
