import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

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

export const settings = sqliteTable("settings", {
  id: integer("id").primaryKey(),
  fontSizeMultiplier: real("font_size_multiplier").notNull().default(1),
  angelusEnabled: integer("angelus_enabled", { mode: "boolean" })
    .notNull()
    .default(true),
  massEnabled: integer("mass_enabled", { mode: "boolean" })
    .notNull()
    .default(true),
  novenaEnabled: integer("novena_enabled", { mode: "boolean" })
    .notNull()
    .default(true),
  officeEnabled: integer("office_enabled", { mode: "boolean" })
    .notNull()
    .default(false),
  permissionRequested: integer("permission_requested", { mode: "boolean" })
    .notNull()
    .default(false),
  permissionSoftRejected: integer("permission_soft_rejected", {
    mode: "boolean",
  })
    .notNull()
    .default(false),
  lastPromptDate: text("last_prompt_date"),
});

export type Docs = typeof docs.$inferSelect;
export type InsertDocs = typeof docs.$inferInsert;
export type Settings = typeof settings.$inferSelect;
