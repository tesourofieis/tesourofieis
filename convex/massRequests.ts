import { Id } from "./_generated/dataModel";
import { mutation, query, internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

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

export const listAvailableForPriest = query({
  args: {
    priestId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Get all available requests
    const allAvailableRequests = await ctx.db
      .query("massRequests")
      .withIndex("by_status", (q) => q.eq("status", "available"))
      .order("desc")
      .collect();

    // Get priest's current scheduled dates
    const priestRequests = await ctx.db
      .query("massRequests")
      .withIndex("by_priest", (q) => q.eq("priestId", args.priestId))
      .collect();

    const priestScheduledDates = priestRequests
      .filter((req) => req.status === "accepted" && req.scheduledDate)
      .map((req) => req.scheduledDate!);

    // Filter out requests that conflict with priest's schedule
    return allAvailableRequests.filter((request) => {
      // If request has no preferred date range, don't filter it
      if (!request.preferredStartDate && !request.preferredEndDate) {
        return true;
      }

      // Check if priest has any scheduled date that conflicts with this request's preferred range
      const effectiveStartDate = request.preferredStartDate || 0;
      const effectiveEndDate =
        request.preferredEndDate || Number.MAX_SAFE_INTEGER;

      return !priestScheduledDates.some(
        (priestDate) =>
          priestDate >= effectiveStartDate && priestDate <= effectiveEndDate,
      );
    });
  },
});

export const getTotalPriestCount = query({
  args: {},
  handler: async (ctx) => {
    const priests = await ctx.db
      .query("users")
      .filter((q) => q.eq("role", "priest"))
      .collect();
    return priests.length;
  },
});

export const listPriestRejections = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("priestRejections").collect();
  },
});

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("massRequests").collect();
  },
});

export const getPriestScheduledDates = query({
  args: {
    priestId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const priestRequests = await ctx.db
      .query("massRequests")
      .withIndex("by_priest", (q) => q.eq("priestId", args.priestId))
      .collect();

    return priestRequests
      .filter((req) => req.status === "accepted" && req.scheduledDate)
      .map((req) => req.scheduledDate!);
  },
});

export const reject = mutation({
  args: {
    requestId: v.id("massRequests"),
    priestId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const priestUserId = args.priestId as Id<"users">;
    const priest = await ctx.db.get(priestUserId);
    if (!priest || priest.role !== "priest") {
      throw new Error("Apenas sacerdotes podem rejeitar pedidos de missa");
    }
    const request = await ctx.db.get(args.requestId);
    if (!request || request.status !== "available") {
      throw new Error("Pedido não disponível");
    }

    // Get total priest count
    const totalPriests = await ctx.db
      .query("users")
      .filter((q) => q.eq("role", "priest"))
      .collect();

    // Get current rejection count for this request
    const rejections = await ctx.db.query("priestRejections").collect();

    const rejectionCount = rejections.length;

    // Update request with rejection count
    await ctx.db.patch(args.requestId, {
      rejectedByCount: rejectionCount,
    });

    // If all priests have rejected, mark as fully rejected and process refund
    if (rejectionCount >= totalPriests.length) {
      await ctx.db.patch(args.requestId, {
        status: "fully_rejected",
      });

      // Trigger refund process
      // await ctx.runMutation(internal.orders.checkOrderRefundEligibility, {
      //   orderId: request.orderId,
      //   massRequestId: args.requestId,
      // });
    }
  },
});

export const accept = mutation({
  args: {
    requestId: v.id("massRequests"),
    priestId: v.id("users"),
    scheduledDate: v.number(),
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

    // Validate scheduled date is not in past
    const now = Date.now();
    const scheduledDate = args.scheduledDate;
    if (scheduledDate < now) {
      throw new Error("Data da celebração não pode ser no passado");
    }

    // Check if scheduled date is within preferred date range (if specified)
    if (
      request.preferredStartDate &&
      scheduledDate < request.preferredStartDate
    ) {
      throw new Error("Data da celebração é anterior à data preferida");
    }
    if (request.preferredEndDate && scheduledDate > request.preferredEndDate) {
      throw new Error("Data da celebração é posterior à data limite preferida");
    }

    await ctx.db.patch(args.requestId, {
      status: "accepted",
      priestId: args.priestId,
      scheduledDate: args.scheduledDate,
    });
  },
});

export const listByPriest = query({
  args: {
    priestId: v.id("users"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("massRequests")
      .withIndex("by_priest", (q) => q.eq("priestId", args.priestId))
      .order("desc")
      .collect();
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
