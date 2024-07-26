import admin from "firebase-admin";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

export const prerender = false;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Firebase Admin SDK (do this once in your app)
if (!admin.apps.length) {
  try {
    const serviceAccountPath = join(
      __dirname,
      "../../../tesourofieis-firebase-adminsdk-sebsl-336ca58ba4.json",
    );
    const serviceAccount = JSON.parse(
      fs.readFileSync(serviceAccountPath, "utf8"),
    );

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
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
