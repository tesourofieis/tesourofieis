import { drizzle } from "drizzle-orm/expo-sqlite";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { openDatabaseAsync, type SQLiteDatabase } from "expo-sqlite";
import type { Docs } from "~/app/(tabs)/more";
import * as schema from "~/db/schema";
import { settings } from "~/db/schema";
import type { DrizzleDocSelect } from "~/services/search";

const DATABASE_NAME = "docs.db";
let dbInstance: SQLiteDatabase | null = null;
let drizzleInstance: ReturnType<typeof drizzle> | null = null;

export async function migrateDatabase(db: SQLiteDatabase): Promise<void> {
  console.log("Running database migrations...");
  try {
    // Check what tables actually exist
    const allTables = await db.getAllAsync(`
      SELECT name FROM sqlite_master WHERE type='table'
    `);
    console.log("Existing tables:", allTables);

    // Check for required tables individually
    const docsTable = await db.getFirstAsync(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name='docs'
    `);

    const settingsTable = await db.getFirstAsync(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name='settings'
    `);

    // Create tables if they don't exist
    if (!docsTable) {
      console.log("Creating docs table...");
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS docs (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          url TEXT,
          level INTEGER NOT NULL,
          section TEXT,
          parent TEXT,
          contentJson TEXT NOT NULL,
          hasChildren INTEGER DEFAULT 0
        )
      `);
    }

    if (!settingsTable) {
      console.log("Creating settings table...");
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS settings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          key TEXT UNIQUE NOT NULL,
          value TEXT
        )
      `);
    }

    console.log("Database schema verification completed.");
  } catch (e) {
    console.error("Error running database migrations:", e);
    throw e;
  }
}

async function ensureDatabase(): Promise<void> {
  try {
    // More explicit asset loading with error handling
    let asset: Asset;
    try {
      asset = Asset.fromModule(require(`../../assets/${DATABASE_NAME}`));
      await asset.downloadAsync();
    } catch (assetError) {
      console.error("Asset loading failed:", assetError);
      // Try alternative path resolution
      const assetModule = require("../../assets/docs.db");
      asset = Asset.fromModule(assetModule);
      await asset.downloadAsync();
    }

    if (!asset.localUri) {
      throw new Error("Asset localUri is null after download");
    }

    const databaseDir = `${FileSystem.documentDirectory}SQLite/`;
    const databasePath = `${databaseDir}${DATABASE_NAME}`;

    await FileSystem.makeDirectoryAsync(databaseDir, { intermediates: true });

    const dbInfo = await FileSystem.getInfoAsync(databasePath);
    if (!dbInfo.exists) {
      console.log(
        `Database does not exist. Copying from asset to ${databasePath}`
      );
      await FileSystem.copyAsync({
        from: asset.localUri,
        to: databasePath,
      });
    } else if (__DEV__) {
      console.log("In DEV mode, replacing existing database for fresh copy.");
      await FileSystem.deleteAsync(databasePath, { idempotent: true });
      await FileSystem.copyAsync({
        from: asset.localUri,
        to: databasePath,
      });
    } else {
      console.log("Database already exists. Skipping copy in production.");
    }
  } catch (error) {
    console.error("Error ensuring database:", error);
    throw new Error(`Failed to ensure database: ${error}`);
  }
}

export async function getDb() {
  if (!drizzleInstance) {
    try {
      await ensureDatabase();
      dbInstance = await openDatabaseAsync(DATABASE_NAME);
      await migrateDatabase(dbInstance);
      drizzleInstance = drizzle(dbInstance, { schema });
      console.log("Database connection established successfully.");
    } catch (error) {
      console.error("Error establishing database connection:", error);
      throw new Error(`Failed to connect to database: ${error}`);
    }
  }
  return drizzleInstance;
}

export async function closeDb(): Promise<void> {
  if (dbInstance) {
    await dbInstance.closeAsync();
    dbInstance = null;
    drizzleInstance = null;
    console.log("Database connection closed.");
  }
}

export function getLevelsFromId(id: string, level: number): string[] {
  return id.split("/").filter(Boolean).slice(0, level);
}

export function mapDbDocToDocs(dbDoc: DrizzleDocSelect): Docs {
  try {
    const parsedContent = JSON.parse(dbDoc.contentJson);
    return {
      id: dbDoc.id,
      title: dbDoc.title,
      url: dbDoc.url,
      level: dbDoc.level,
      section: dbDoc.section ?? null,
      levels: getLevelsFromId(dbDoc.id, dbDoc.level),
      parent: dbDoc.parent ?? null,
      content: parsedContent,
      hasChildren: dbDoc.hasChildren,
    };
  } catch (error) {
    console.error("Error mapping database document:", error);
    throw new Error(`Failed to map document ${dbDoc.id}: ${error}`);
  }
}
