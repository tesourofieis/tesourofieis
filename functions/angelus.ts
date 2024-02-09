import type { Handler } from "@netlify/functions";
import webpush from "web-push";

const handler: Handler = async (event) => {
  webpush.setVapidDetails(
    "mailto:academy@dicoding.com",
    process.env.PUBLIC_VAPIDKEY,
    process.env.PRIVATE_VAPIDKEY,
  );

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "No data provided",
      }),
    };
  }

  const { data, subscription } = JSON.parse(event.body);
  const { message } = data;

  const notification = JSON.stringify({
    title: "Dicoding Academy",
    options: {
      body: message,
    },
  });

  await webpush.sendNotification(subscription, notification);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "OK",
    }),
  };
};

export { handler };
