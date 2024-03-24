import { getCalendar } from "../../../../lib/getCalendar";
import { getDay } from "../../../../lib/getDay";

export const GET = ({ params }) => {
  const { date } = params;
  const proper = getDay(date);
  return new Response(
    JSON.stringify({
      proper: proper,
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
};

export function getStaticPaths() {
  const calendar = getCalendar(new Date().getFullYear());
  return Object.entries(calendar).map(([calendarDate]) => {
    return {
      params: { date: calendarDate },
    };
  });
}
