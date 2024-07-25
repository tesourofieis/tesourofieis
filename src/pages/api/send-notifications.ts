import webpush from "web-push";
import { db, PushSubscriptions } from "astro:db";

webpush.setVapidDetails(
  "mailto:your-email@example.com",
  import.meta.env.PUBLIC_VAPID_KEY,
  import.meta.env.PRIVATE_VAPID_KEY,
);

console.log("VAPID Key:", import.meta.env.PUBLIC_VAPID_KEY);

export async function GET() {
  const subscriptions = await db.select().from(PushSubscriptions).all();

  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(
        {
          endpoint: sub.endpoint,
          keys: {
            p256dh: sub.p256dh,
            auth: sub.auth,
          },
        },
        JSON.stringify({
          title: "Test Notification",
          body: "This is a test notification",
        }),
      );
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
