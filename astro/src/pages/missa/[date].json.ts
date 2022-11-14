import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params }) => {
  const { date } = params;
  // const mass = await getMassOfTheDay(date);
  const mass = {
    hello: "mass",
    date
  }

  if (!mass) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(JSON.stringify(mass), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
