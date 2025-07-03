import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const docs = sqliteTable("docs", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  body: text("body").notNull(),
  url: text("url").notNull(),
  level: integer("level").notNull(),
  section: text("section"),
  parentId: text("parent_id"),
  headingsJson: text("headings_json"),
  comment: text("comment"),
});
