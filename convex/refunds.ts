"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export const processRefundAndNotify = action({
  args: {
    checkoutSessionId: v.string(),
    amount: v.number(),
    orderId: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      // Retrieve the checkout session to get the payment intent
      const session = await stripe.checkout.sessions.retrieve(
        args.checkoutSessionId,
      );

      if (!session.payment_intent) {
        throw new Error("No payment intent found for session");
      }

      // Create refund
      const refund = await stripe.refunds.create({
        payment_intent: session.payment_intent as string,
        amount: args.amount,
        reason: "requested_by_customer",
        metadata: {
          type: "mass_intention_refund",
          checkout_session_id: args.checkoutSessionId,
          order_id: args.orderId,
        },
      });

      // Update order with refund ID
      await ctx.runMutation(internal.orders.markOrderRefunded, {
        orderId: args.orderId as any,
        refundId: refund.id,
      });

      return { success: true, refundId: refund.id };
    } catch (error) {
      console.error("Refund failed:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});
