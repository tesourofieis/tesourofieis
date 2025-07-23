import { eq } from "drizzle-orm";
import { getDb } from "~/db/db";
import { type Settings, settings } from "~/db/schema";

export async function getSettings(): Promise<Settings> {
  const db = await getDb();

  const allRows = db.select().from(settings).all();
  console.log("All settings rows:", allRows);

  const existingSettings = db.select().from(settings).get();

  console.log("Existing settings:", existingSettings);

  if (existingSettings) {
    return existingSettings;
  }

  const defaultSettings = db
    .insert(settings)
    .values({
      angelusEnabled: true,
      fontSize: "normal",
      massEnabled: true,
      novenaEnabled: true,
      officeEnabled: false,
    })
    .returning()
    .get();

  return defaultSettings;
}

export async function updateSettings(
  newValues: Partial<Settings>
): Promise<Settings> {
  console.debug("updateSettings called with:", newValues);
  const db = await getDb();

  // Check if the record exists before updating
  // Add a try-catch block to specifically catch issues during selection
  let existingRecord: Settings | undefined;
  try {
    existingRecord = db.select().from(settings).get();
    console.log("Existing record retrieved:", existingRecord);
  } catch (selectError) {
    console.error("Error retrieving existing record:", selectError);
    // Depending on your application, you might want to re-throw or handle this
    throw selectError;
  }

  // --- Crucial Debugging Step ---
  // Log the exact value of existingRecord and its type
  console.log(
    `Type of existingRecord: ${typeof existingRecord}, Value:`,
    existingRecord
  );

  if (!existingRecord) {
    console.log("No record found, attempting to create one first...");
    let inserted: Settings;
    try {
      inserted = db.insert(settings).values(newValues).returning().get();
      console.log("Successfully inserted new record:", inserted);
      return inserted; // Function returns here
    } catch (insertError) {
      console.error("Error inserting new record:", insertError);
      // Re-throw the error so you can see it or handle it upstream
      throw insertError;
    }
  }

  console.log("Existing record found, attempting to update...");
  let updatedSettings: Settings;
  try {
    updatedSettings = db.update(settings).set(newValues).returning().get();
    console.log("Update result:", updatedSettings); // This is the log you're missing
  } catch (updateError) {
    console.error("Error updating existing record:", updateError);
    throw updateError;
  }

  // Verify the update actually persisted
  const afterUpdate = db.select().from(settings).get();
  console.log("Record after update (verification):", afterUpdate);

  return updatedSettings;
}
