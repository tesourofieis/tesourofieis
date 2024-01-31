import { getCalendar } from "../../../../lib/getCalendar";
import { format_propers } from "../../../../lib/utils";

export async function getStaticPaths() {
  const calendar = getCalendar(new Date().getFullYear());
  return Object.entries(calendar).map(([calendarDate]) => ({
    params: { date: calendarDate },
  }));
}

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
      headers: {
        "Cache-Control": "public, max-age=31536000",
        "CDN-Cache-Control": "public, max-age=31536000",
        // change version only when api code changes
        "Cache-Tag": `app-version-v.0.0.2/mass-date-${date}`,
      },
    },
  );
}
