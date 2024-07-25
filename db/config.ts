import { defineTable, column, defineDb } from "astro:db";

const PushSubscriptions = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    endpoint: column.text(),
    p256dh: column.text(),
    auth: column.text(),
  },
});

export default defineDb({
  tables: { PushSubscriptions },
});
