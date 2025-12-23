"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import Stripe from "stripe";
import { internal } from "./_generated/api";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export const createSession = action({
  args: {
    userId: v.id("users"),
    email: v.string(),
    items: v.array(
      v.object({
        intention: v.string(),
        quantity: v.number(),
      }),
    ),
    totalAmount: v.number(),
  },
  handler: async (ctx, args) => {
    const lineItems = args.items.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: `${item.quantity} ${item.quantity === 1 ? "Missa" : "Missas"}`,
          description: item.intention,
        },
        unit_amount: 1000,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      customer_email: args.email,
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.SITE_URL || "http://localhost:8081"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.SITE_URL || "http://localhost:8081"}/cancel`,
      metadata: {
        userId: args.userId,
        items: JSON.stringify(args.items),
      },
    });

    await ctx.runMutation(internal.orders.createPendingOrder, {
      userId: args.userId,
      items: args.items,
      totalAmount: args.totalAmount,
      checkoutSessionId: session.id,
    });

    return { url: session.url };
  },
});

export const handleWebhook = action({
  args: {
    signature: v.string(),
    payload: v.string(),
  },
  handler: async (ctx, args) => {
    const event = stripe.webhooks.constructEvent(
      args.payload,
      args.signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      await ctx.runMutation(internal.orders.completeOrder, {
        checkoutSessionId: session.id,
      });
    }

    return { received: true };
  },
});
