import { drizzle } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";
import { useMemo } from "react";

export function useDatabase() {
  const database = useSQLiteContext();

  return useMemo(() => {
    return drizzle(database);
  }, [database]);
}
