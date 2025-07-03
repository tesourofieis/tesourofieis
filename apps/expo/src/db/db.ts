import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import { openDatabaseAsync, type SQLiteDatabase } from "expo-sqlite";
import type { Docs } from "~/app/(tabs)/more";
import { drizzle } from "drizzle-orm/expo-sqlite";
import * as schema from "~/db/schema";

// This is the precise type that Drizzle returns from a select query.
// It's derived directly from your schema, ensuring it's always accurate.
type DrizzleDocSelect = typeof schema.docs.$inferSelect;

const DATABASE_NAME = "docs.db";
let _dbInstance: SQLiteDatabase | null = null;

async function copyDatabaseFromAssets() {
  const asset = Asset.fromModule(require(`../../assets/${DATABASE_NAME}`));
  if (!asset.localUri) {
    await asset.downloadAsync();
  }
  const databaseDir = `${FileSystem.documentDirectory}SQLite/`;
  const databasePath = `${databaseDir}${DATABASE_NAME}`;

  await FileSystem.makeDirectoryAsync(databaseDir, { intermediates: true });

  const appDbInfo = await FileSystem.getInfoAsync(databasePath);

  // Consider removing __DEV__ from here if you don't want to re-copy on every dev run.
  // It's useful during development but might be slow in production if the DB is large.
  if (
    !appDbInfo.exists ||
    (asset.hash && appDbInfo.md5 !== asset.md5) ||
    __DEV__ // Standard Expo global for development mode
  ) {
    console.log("Copying database from assets...");
    if (appDbInfo.exists) {
      console.log("Deleting old database...");
      await FileSystem.deleteAsync(databasePath, { idempotent: true });
    }
    await FileSystem.copyAsync({
      from: asset.localUri!,
      to: databasePath,
    });
    console.log("Database copied successfully!");
  } else {
    console.log("Database already exists and is up-to-date. Skipping copy.");
  }
}

// Export the Drizzle instance with the schema
export type OurDrizzleDb = ReturnType<typeof drizzle<typeof schema>>;

export async function getDb(): Promise<OurDrizzleDb> {
  if (!_dbInstance) {
    await copyDatabaseFromAssets();
    _dbInstance = await openDatabaseAsync(DATABASE_NAME);
  }
  // Initialize drizzle with the schema
  const db = drizzle(_dbInstance, { schema });
  // console.log("Drizzle DB connection established with schema."); // Optional: can be noisy
  return db;
}

export function getLevelsFromId(id: string, level: number): string[] {
  return id.split("/").filter(Boolean).slice(0, level);
}

/**
 * Maps a raw database row from Drizzle to the final 'Docs' type used in the app.
 * This function is responsible for parsing JSON fields or any other transformations.
 * @param dbDoc - The document object selected from the database by Drizzle.
 * @returns The final 'Docs' object ready for the UI.
 */
export function mapDbDocToDocs(dbDoc: DrizzleDocSelect): Docs {
  // TypeScript now knows that dbDoc has properties like `id`, `title`, `parentId`, etc.
  return {
    id: dbDoc.id,
    title: dbDoc.title,
    body: dbDoc.body,
    url: dbDoc.url,
    level: dbDoc.level,
    section: dbDoc.section ?? undefined, // Use ?? for nullish coalescing
    // The `levels` property seems to be derived, so we compute it here.
    levels: getLevelsFromId(dbDoc.id, dbDoc.level),
    // Safely parse the JSON string, providing an empty array as a fallback.
    headings: dbDoc.headingsJson ? JSON.parse(dbDoc.headingsJson) : [],
    comment: dbDoc.comment ?? undefined,
    // Note: The parentId from the schema is likely named `parentId` (camelCase)
    // but your final `Docs` type might not need it if you only use it for querying.
  };
}
