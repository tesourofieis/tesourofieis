import { convexTest } from "convex-test";
import { expect, test, describe } from "vitest";
import { api } from "./_generated/api";
import schema from "./schema";

describe("Mass Requests Flow", () => {
  test("complete user journey: auth → add to cart → checkout → payment success", async () => {
    const t = convexTest(schema, modules);

    const asUser = t.withIdentity({
      subject: "user123",
      email: "user@example.com",
    });

    const viewer = await asUser.query(api.users.viewer);
    expect(viewer).toBeDefined();
    const userId = viewer!._id;

    expect(viewer?.role).toBe("user");
    expect(viewer?.email).toBe("user@example.com");

    const cartItems = [
      { intention: "Eterno descanso de João Silva", quantity: 1 },
      { intention: "Saúde de Maria Santos", quantity: 2 },
    ];
    const totalAmount = 3 * 1000;
    const checkoutSessionId = "cs_test_123";

    await asUser.mutation(api.orders.createPendingOrderTest, {
      userId,
      items: cartItems,
      totalAmount,
      checkoutSessionId,
    });

    const orders = await asUser.query(api.orders.listUserOrders, { userId });
    expect(orders.length).toBe(1);
    expect(orders[0].status).toBe("pending_payment");
    expect(orders[0].totalAmount).toBe(totalAmount);
    expect(orders[0].items).toEqual(cartItems);

    await t.mutation(api.orders.completeOrderTest, { checkoutSessionId });

    const paidOrders = await asUser.query(api.orders.listUserOrders, {
      userId,
    });
    expect(paidOrders[0].status).toBe("paid");

    const availableRequests = await t.query(api.massRequests.listAvailable, {});
    expect(availableRequests.length).toBe(3);
    expect(availableRequests.every((r) => r.status === "available")).toBe(true);
  });

  test("priest accepts with scheduled date", async () => {
    const t = convexTest(schema, modules);

    const asUser = t.withIdentity({
      subject: "faithful123",
      email: "faithful@example.com",
    });
    const viewer = await asUser.query(api.users.viewer);
    const userId = viewer!._id;

    await asUser.mutation(api.orders.createPendingOrderTest, {
      userId,
      items: [{ intention: "Pela família", quantity: 1 }],
      totalAmount: 1000,
      checkoutSessionId: "cs_priest_test",
    });

    await t.mutation(api.orders.completeOrderTest, {
      checkoutSessionId: "cs_priest_test",
    });

    const asPriest = t.withIdentity({
      subject: "priest123",
      email: "priest@example.com",
    });
    const priestViewer = await asPriest.query(api.users.viewer);
    const priestId = priestViewer!._id;

    await asPriest.mutation(api.users.updateRole, {
      userId: priestId,
      role: "priest",
    });

    const available = await asPriest.query(api.massRequests.listAvailable, {});
    expect(available.length).toBe(1);
    expect(available[0].status).toBe("available");

    const scheduledDate = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days from now
    await asPriest.mutation(api.massRequests.accept, {
      requestId: available[0]._id,
      priestId,
      scheduledDate,
    });

    const accepted = await asPriest.query(api.massRequests.listByPriest, {
      priestId,
    });
    expect(accepted.length).toBe(1);
    expect(accepted[0].status).toBe("accepted");
    expect(accepted[0].priestId).toBe(priestId);
    expect(accepted[0].scheduledDate).toBe(scheduledDate);

    const stillAvailable = await t.query(api.massRequests.listAvailable, {});
    expect(stillAvailable.length).toBe(0);
  });

  test("priest cannot accept with past date", async () => {
    const t = convexTest(schema, modules);

    const asUser = t.withIdentity({
      subject: "pastdate_user",
      email: "pastdate@test.com",
    });
    const viewer = await asUser.query(api.users.viewer);
    const userId = viewer!._id;

    const asPriest = t.withIdentity({
      subject: "pastdate_priest",
      email: "priest@test.com",
    });
    const priestViewer = await asPriest.query(api.users.viewer);
    const priestId = priestViewer!._id;

    await asPriest.mutation(api.users.updateRole, {
      userId: priestId,
      role: "priest",
    });

    await asUser.mutation(api.orders.createPendingOrderTest, {
      userId,
      items: [{ intention: "Test past date", quantity: 1 }],
      totalAmount: 1000,
      checkoutSessionId: "cs_pastdate_test",
    });

    await t.mutation(api.orders.completeOrderTest, {
      checkoutSessionId: "cs_pastdate_test",
    });

    const available = await asPriest.query(api.massRequests.listAvailable, {});
    expect(available.length).toBe(1);

    const pastDate = Date.now() - 24 * 60 * 60 * 1000; // 1 day ago
    await expect(
      asPriest.mutation(api.massRequests.accept, {
        requestId: available[0]._id,
        priestId,
        scheduledDate: pastDate,
      }),
    ).rejects.toThrow("Data da celebração não pode ser no passado");
  });
});

// @ts-ignore
const modules = import.meta.glob("./**/*.ts");
