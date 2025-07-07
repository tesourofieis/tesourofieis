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

async function migrateDatabase(db: SQLiteDatabase): Promise<void> {
  console.log("Running database migrations...");
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS settings (
        id INTEGER PRIMARY KEY,
        font_size_multiplier REAL NOT NULL DEFAULT 1,
        angelus_enabled INTEGER NOT NULL DEFAULT 1,
        mass_enabled INTEGER NOT NULL DEFAULT 1,
        novena_enabled INTEGER NOT NULL DEFAULT 1,
        office_enabled INTEGER NOT NULL DEFAULT 0,
        permission_requested INTEGER NOT NULL DEFAULT 0,
        permission_soft_rejected INTEGER NOT NULL DEFAULT 0,
        last_prompt_date TEXT
      );
    `);
    console.log("Initial tables created/ensured.");
  } catch (e) {
    console.error("Error running initial schema setup:", e);
    throw e;
  }
}

async function ensureDatabase(): Promise<void> {
  const asset = await Asset.fromModule(
    require(`../../assets/${DATABASE_NAME}`),
  ).downloadAsync();
  const databaseDir = `${FileSystem.documentDirectory}SQLite/`;
  const databasePath = `${databaseDir}${DATABASE_NAME}`;

  await FileSystem.makeDirectoryAsync(databaseDir, { intermediates: true });
  const dbInfo = await FileSystem.getInfoAsync(databasePath);

  if (!dbInfo.exists) {
    console.log(
      `Database does not exist. Copying from asset to ${databasePath}`,
    );
    await FileSystem.copyAsync({ from: asset.localUri!, to: databasePath });
  } else if (__DEV__) {
    console.log("In DEV mode, replacing existing database for fresh copy.");
    await FileSystem.deleteAsync(databasePath, { idempotent: true }); // Deletes existing
    await FileSystem.copyAsync({ from: asset.localUri!, to: databasePath }); // Copies fresh
  } else {
    console.log("Database already exists. Skipping copy in production.");
  }
}

export async function getDb(): Promise<
  ReturnType<typeof drizzle<typeof schema>>
> {
  if (!dbInstance) {
    await ensureDatabase();
    dbInstance = await openDatabaseAsync(DATABASE_NAME);

    await migrateDatabase(dbInstance);

    const db = drizzle(dbInstance, { schema });

    try {
      const existingSettings = await db.select().from(settings).limit(1);

      if (existingSettings.length === 0) {
        console.log("Initializing settings table with default values.");
        await db.insert(settings).values({
          fontSizeMultiplier: 1,
          angelusEnabled: true,
          massEnabled: true,
          novenaEnabled: true,
          officeEnabled: false,
          permissionRequested: false,
          permissionSoftRejected: false,
        });
      } else {
        console.log("Settings table already contains data.");
      }
    } catch (error) {
      console.error("Error initializing settings table:", error);

      throw new Error(`Failed to initialize settings: ${error.message}`);
    }

    return db;
  }
  return drizzle(dbInstance, { schema });
}

export function getLevelsFromId(id: string, level: number): string[] {
  return id.split("/").filter(Boolean).slice(0, level);
}

export function mapDbDocToDocs(dbDoc: DrizzleDocSelect): Docs {
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
}
