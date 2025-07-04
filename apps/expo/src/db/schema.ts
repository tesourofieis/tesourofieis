import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const docs = sqliteTable("docs", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  url: text("url").notNull(),
  level: integer("level").notNull(),
  section: text("section"),
  parent: text("parent"),
  contentJson: text("content_json").notNull(),
  hasChildren: integer({ mode: "boolean" }).notNull(),
});
