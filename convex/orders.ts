import { mutation, query, internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const createPendingOrder = internalMutation({
  args: {
    userId: v.id("users"),
    items: v.array(
      v.object({
        intention: v.string(),
        quantity: v.number(),
        preferredStartDate: v.optional(v.number()),
        preferredEndDate: v.optional(v.number()),
      }),
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
    userId: v.id("users"),
    items: v.array(
      v.object({
        intention: v.string(),
        quantity: v.number(),
        preferredStartDate: v.optional(v.number()),
        preferredEndDate: v.optional(v.number()),
      }),
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
        q.eq("checkoutSessionId", args.checkoutSessionId),
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
          preferredStartDate: item.preferredStartDate,
          preferredEndDate: item.preferredEndDate,
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
        q.eq("checkoutSessionId", args.checkoutSessionId),
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
          preferredStartDate: item.preferredStartDate,
          preferredEndDate: item.preferredEndDate,
        });
      }
    }
  },
});

export const checkOrderRefundEligibility = internalMutation({
  args: {
    orderId: v.id("orders"),
  },
  handler: async (ctx, args) => {
    const order = await ctx.db.get(args.orderId);
    if (!order || order.status === "refunded") {
      return { eligible: false, reason: "Order not found or already refunded" };
    }

    // Check if all mass requests in this order are fully rejected
    const orderRequests = await ctx.db
      .query("massRequests")
      .withIndex("by_order", (q) => q.eq("orderId", args.orderId))
      .collect();

    const shouldRefund = orderRequests.every(
      (req) =>
        req.status === "fully_rejected" ||
        req.status === "expired" ||
        req.status === "overdue",
    );

    return {
      eligible: shouldRefund,
      reason: shouldRefund
        ? "All requests eligible for refund"
        : "Not all requests are eligible for refund",
      checkoutSessionId: order.checkoutSessionId,
      amount: order.totalAmount,
    };
  },
});

export const markOrderRefunded = internalMutation({
  args: {
    orderId: v.id("orders"),
    refundId: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.orderId, {
      status: "refunded",
      refundId: args.refundId,
    });
  },
});

export const listUserOrders = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});
