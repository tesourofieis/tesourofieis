import { db, PushSubscriptions } from "astro:db";

export async function POST({ request }) {
  const subscription = await request.json();

  await db.insert(PushSubscriptions).values({
    endpoint: subscription.endpoint,
    p256dh: subscription.keys.p256dh,
    auth: subscription.keys.auth,
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
