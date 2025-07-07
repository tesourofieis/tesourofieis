import { eq } from "drizzle-orm";
import { getDb } from "~/db/db";
import { type Settings, settings } from "~/db/schema";

const SETTINGS_ID = 1;

/**
 * Gets the current app settings.
 * If no settings exist (first app launch), it creates and returns the default settings.
 */
export async function getSettings(): Promise<Settings> {
  const db = await getDb();

  const existingSettings = db
    .select()
    .from(settings)
    .where(eq(settings.id, SETTINGS_ID))
    .get();

  if (existingSettings) {
    return existingSettings;
  }

  // First time launch: create and return default settings
  const defaultSettings = db
    .insert(settings)
    .values({ id: SETTINGS_ID }) // All other values use default from schema
    .returning()
    .get();

  return defaultSettings;
}

/**
 * Updates one or more settings in the database.
 * @param newValues An object with the settings to update.
 */
export async function updateSettings(
  newValues: Partial<Settings>,
): Promise<Settings> {
  const db = await getDb();
  const updatedSettings = db
    .update(settings)
    .set(newValues)
    .where(eq(settings.id, SETTINGS_ID))
    .returning()
    .get();

  return updatedSettings;
}
