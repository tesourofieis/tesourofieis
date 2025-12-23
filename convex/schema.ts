import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    image: v.optional(v.string()),
    role: v.optional(v.string()),
  }).index("by_email", ["email"]),

  orders: defineTable({
    userId: v.id("users"),
    items: v.array(
      v.object({
        intention: v.string(),
        quantity: v.number(),
      }),
    ),
    totalAmount: v.number(),
    status: v.union(
      v.literal("cart"),
      v.literal("pending_payment"),
      v.literal("paid"),
    ),
    checkoutSessionId: v.optional(v.string()),
  })
    .index("by_user", ["userId"])
    .index("by_session", ["checkoutSessionId"]),

  massRequests: defineTable({
    orderId: v.id("orders"),
    userId: v.id("users"),
    priestId: v.optional(v.id("users")),
    intentionName: v.string(),
    status: v.union(
      v.literal("available"),
      v.literal("accepted"),
      v.literal("completed"),
    ),
  })
    .index("by_status", ["status"])
    .index("by_priest", ["priestId"])
    .index("by_order", ["orderId"]),
});
