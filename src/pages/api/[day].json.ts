import { getDay } from "../../../lib/getDay";
import { getCalendar } from "../../../lib/getCalendar";

export async function GET({ params }) {
  const day = params.day;

  const proper = getDay(day);

  return new Response(
    JSON.stringify({
      id: day,
      body: proper,
    }),
  );
}

export function getStaticPaths() {
  const calendar = getCalendar(new Date().getFullYear());

  const p = Object.entries(calendar);

  return p.map(([date]) => ({ params: { day: date } }));
}
