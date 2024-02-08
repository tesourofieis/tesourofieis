import type { Handler } from "@netlify/functions";
import * as webPush from "web-push";

// Configure VAPID keys
const vapidKeys = {
  publicKey: "your-public-key",
  privateKey: "your-private-key",
};
webPush.setVapidDetails(
  "mailto:your-email@example.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

const handler: Handler = async () => {
  try {
    // Message content
    const message = "Your notification message here";

    // Send push notification to a specific endpoint (user)
    await webPush.sendNotification("https://tesourofieis.com", message);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Push notifications sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending push notifications:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

export { handler };
