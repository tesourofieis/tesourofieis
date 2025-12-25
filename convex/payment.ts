"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export const createPaymentIntent = action({
  args: {
    amount: v.number(),
    currency: v.string(),
  },
  handler: async (ctx, args) => {
    const customer = await stripe.customers.create();

    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2025-12-15.clover" },
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: args.amount,
      currency: args.currency,
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        type: "mass_intentions",
      },
    });

    return {
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      paymentIntentId: paymentIntent.id,
    };
  },
});

export const createRefund = action({
  args: {
    checkoutSessionId: v.string(),
    amount: v.number(),
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
        },
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

    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;

      // Webhook confirma pagamento bem-sucedido
      // Aqui poderias atualizar o estado da ordem se necessário
      // mas como já marcamos como "paid" no cliente após o payment sheet,
      // este webhook serve principalmente para auditoria e confirmação
    }

    return { received: true };
  },
});
