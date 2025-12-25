import { internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

export const checkExpiredRequests = internalMutation({
  args: {},
  handler: async (ctx) => {
    const now = Date.now();
    const oneMonthAgo = now - ONE_MONTH_MS;

    // Find requests that have been available for more than a month
    const allRequests = await ctx.db.query("massRequests").collect();

    const oldAvailableRequests = allRequests.filter(
      (request) =>
        request.status === "available" && request._creationTime < oneMonthAgo,
    );

    // Mark them as expired and process refunds
    for (const request of oldAvailableRequests) {
      await ctx.db.patch(request._id, {
        status: "expired",
      });

      // Check if this affects the entire order
      await ctx.runMutation(internal.orders.checkOrderRefundEligibility, {
        orderId: request.orderId,
      });
    }

    return {
      expiredCount: oldAvailableRequests.length,
      timestamp: now,
    };
  },
});

export const checkOverdueRequests = internalMutation({
  args: {},
  handler: async (ctx) => {
    const now = Date.now();
    const oneMonthAgo = now - ONE_MONTH_MS;

    // Find accepted requests where scheduled date is more than a month ago
    const allRequests = await ctx.db.query("massRequests").collect();

    const overdueRequests = allRequests.filter(
      (request) =>
        request.status === "accepted" &&
        request.scheduledDate &&
        request.scheduledDate > 0 &&
        request.scheduledDate < oneMonthAgo,
    );

    // Mark them as overdue and process refunds
    for (const request of overdueRequests) {
      await ctx.db.patch(request._id, {
        status: "overdue",
      });

      // Check if this affects the entire order
      await ctx.runMutation(internal.orders.checkOrderRefundEligibility, {
        orderId: request.orderId,
      });
    }

    return {
      overdueCount: overdueRequests.length,
      timestamp: now,
    };
  },
});
