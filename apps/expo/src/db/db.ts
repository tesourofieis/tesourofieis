import { drizzle } from "drizzle-orm/expo-sqlite";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { openDatabaseAsync, type SQLiteDatabase } from "expo-sqlite";
import type { Docs } from "~/app/(tabs)/more";
import * as schema from "~/db/schema";

type DrizzleDocSelect = typeof schema.docs.$inferSelect;
const DATABASE_NAME = "docs.db";
let _dbInstance: SQLiteDatabase | null = null;

async function copyDatabaseFromAssets(): Promise<void> {
  const asset = Asset.fromModule(require(`../../assets/${DATABASE_NAME}`));
  if (!asset.localUri) {
    await asset.downloadAsync();
  }
  const databaseDir = `${FileSystem.documentDirectory}SQLite/`;
  const databasePath = `${databaseDir}${DATABASE_NAME}`;
  await FileSystem.makeDirectoryAsync(databaseDir, { intermediates: true });
  const appDbInfo = await FileSystem.getInfoAsync(databasePath);

  if (!appDbInfo.exists || __DEV__) {
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

export type OurDrizzleDb = ReturnType<typeof drizzle<typeof schema>>;

export async function getDb(): Promise<OurDrizzleDb> {
  if (!_dbInstance) {
    await copyDatabaseFromAssets();
    _dbInstance = await openDatabaseAsync(DATABASE_NAME);
  }
  const db = drizzle(_dbInstance, { schema });
  return db;
}

export function getLevelsFromId(id: string, level: number): string[] {
  return id.split("/").filter(Boolean).slice(0, level);
}

export function mapDbDocToDocs(dbDoc: DrizzleDocSelect): Docs {
  const parsedContent: Docs["content"] = JSON.parse(dbDoc.contentJson);
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
