import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listAvailable = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("massRequests")
      .withIndex("by_status", (q) => q.eq("status", "available"))
      .order("desc")
      .collect();
  },
});

export const listByPriest = query({
  args: { priestId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("massRequests")
      .withIndex("by_priest", (q) => q.eq("priestId", args.priestId))
      .order("desc")
      .collect();
  },
});

export const accept = mutation({
  args: {
    requestId: v.id("massRequests"),
    priestId: v.string(),
  },
  handler: async (ctx, args) => {
    const priestUserId = args.priestId as Id<"users">;
    const priest = await ctx.db.get(priestUserId);
    if (!priest || priest.role !== "priest") {
      throw new Error("Apenas sacerdotes podem aceitar pedidos de missa");
    }
    const request = await ctx.db.get(args.requestId);
    if (!request || request.status !== "available") {
      throw new Error("Pedido não disponível");
    }
    await ctx.db.patch(args.requestId, {
      status: "accepted",
      priestId: args.priestId,
    });
  },
});

export const complete = mutation({
  args: {
    requestId: v.id("massRequests"),
  },
  handler: async (ctx, args) => {
    const request = await ctx.db.get(args.requestId);
    if (!request || request.status !== "accepted") {
      throw new Error("Pedido não aceite");
    }
    await ctx.db.patch(args.requestId, {
      status: "completed",
    });
  },
});
