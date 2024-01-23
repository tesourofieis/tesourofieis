import { getCalendar } from "../../../lib/getCalendar";

export async function GET({ params }) {
  const year = params.year;

  const calendar = getCalendar(year);

  return new Response(
    JSON.stringify({
      id: year,
      body: calendar,
    }),
  );
}

export function getStaticPaths() {
  return [{ params: { year: new Date().getFullYear().toString() } }];
}
