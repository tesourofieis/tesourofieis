import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    passwordHash: v.string(),
    role: v.union(v.literal("user"), v.literal("priest")),
  }).index("by_email", ["email"]),

  orders: defineTable({
    userId: v.string(),
    items: v.array(
      v.object({
        intention: v.string(),
        quantity: v.number(),
      })
    ),
    totalAmount: v.number(),
    status: v.union(
      v.literal("cart"),
      v.literal("pending_payment"),
      v.literal("paid")
    ),
    checkoutSessionId: v.optional(v.string()),
  })
    .index("by_user", ["userId"])
    .index("by_session", ["checkoutSessionId"]),

  massRequests: defineTable({
    orderId: v.string(),
    userId: v.string(),
    priestId: v.optional(v.string()),
    intentionName: v.string(),
    status: v.union(
      v.literal("available"),
      v.literal("accepted"),
      v.literal("completed")
    ),
  })
    .index("by_status", ["status"])
    .index("by_priest", ["priestId"])
    .index("by_order", ["orderId"]),
});
