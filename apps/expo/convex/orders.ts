import { mutation, query, internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const createPendingOrder = internalMutation({
  args: {
    userId: v.string(),
    items: v.array(
      v.object({
        intention: v.string(),
        quantity: v.number(),
      })
    ),
    totalAmount: v.number(),
    checkoutSessionId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("orders", {
      userId: args.userId,
      items: args.items,
      totalAmount: args.totalAmount,
      status: "pending_payment",
      checkoutSessionId: args.checkoutSessionId,
    });
  },
});

export const createPendingOrderTest = mutation({
  args: {
    userId: v.string(),
    items: v.array(
      v.object({
        intention: v.string(),
        quantity: v.number(),
      })
    ),
    totalAmount: v.number(),
    checkoutSessionId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("orders", {
      userId: args.userId,
      items: args.items,
      totalAmount: args.totalAmount,
      status: "pending_payment",
      checkoutSessionId: args.checkoutSessionId,
    });
  },
});

export const completeOrder = internalMutation({
  args: {
    checkoutSessionId: v.string(),
  },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_session", (q) => 
        q.eq("checkoutSessionId", args.checkoutSessionId)
      )
      .first();

    if (!order || order.status === "paid") return;

    await ctx.db.patch(order._id, { status: "paid" });

    for (const item of order.items) {
      for (let i = 0; i < item.quantity; i++) {
        await ctx.db.insert("massRequests", {
          orderId: order._id,
          userId: order.userId,
          intentionName: item.intention,
          status: "available",
        });
      }
    }
  },
});

export const completeOrderTest = mutation({
  args: {
    checkoutSessionId: v.string(),
  },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_session", (q) => 
        q.eq("checkoutSessionId", args.checkoutSessionId)
      )
      .first();
    
    if (!order || order.status === "paid") return;
    
    await ctx.db.patch(order._id, { status: "paid" });
    
    for (const item of order.items) {
      for (let i = 0; i < item.quantity; i++) {
        await ctx.db.insert("massRequests", {
          orderId: order._id,
          userId: order.userId,
          intentionName: item.intention,
          status: "available",
        });
      }
    }
  },
});

export const listUserOrders = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});
