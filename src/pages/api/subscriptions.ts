import admin from "firebase-admin";

export const prerender = false;

// Initialize Firebase Admin SDK (do this once in your app)
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: import.meta.env.PROJECT_ID,
        privateKey: import.meta.env.PRIVATE_KEY_ID,
        clientEmail: import.meta.env.CLIENT_EMAIL,
      } as admin.ServiceAccount),
    });
    console.log("Firebase Admin SDK initialized successfully");
  } catch (error) {
    console.error("Error initializing Firebase Admin SDK:", error);
  }
}

export async function POST({ request }) {
  const { data } = await request.json();

  try {
    // Subscribe the token to the 'all_users' topic
    await admin.messaging().subscribeToTopic(data.token, data.topic);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error subscribing to topic:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

export async function DELETE({ request }) {
  const { data } = await request.json();
  try {
    // Unsubscribe the token from the topic
    await admin.messaging().unsubscribeFromTopic(data.token, data.topic);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error unsubscribing from topic:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
