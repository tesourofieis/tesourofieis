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

  test("payment cancellation flow", async () => {
    const t = convexTest(schema, modules);

    const asUser = t.withIdentity({
      subject: "cancel123",
      email: "cancel@example.com",
    });
    const viewer = await asUser.query(api.users.viewer);
    const userId = viewer!._id;

    await asUser.mutation(api.orders.createPendingOrderTest, {
      userId,
      items: [{ intention: "Test intention", quantity: 1 }],
      totalAmount: 1000,
      checkoutSessionId: "cs_cancel_123",
    });

    const orders = await asUser.query(api.orders.listUserOrders, { userId });
    expect(orders[0].status).toBe("pending_payment");

    const requests = await t.query(api.massRequests.listAvailable, {});
    expect(requests.length).toBe(0);
  });

  test("priest accepts and completes mass request", async () => {
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

    await asPriest.mutation(api.massRequests.accept, {
      requestId: available[0]._id,
      priestId,
    });

    const accepted = await asPriest.query(api.massRequests.listByPriest, {
      priestId,
    });
    expect(accepted.length).toBe(1);
    expect(accepted[0].status).toBe("accepted");
    expect(accepted[0].priestId).toBe(priestId);

    const stillAvailable = await t.query(api.massRequests.listAvailable, {});
    expect(stillAvailable.length).toBe(0);

    await asPriest.mutation(api.massRequests.complete, {
      requestId: accepted[0]._id,
    });

    const completed = await asPriest.query(api.massRequests.listByPriest, {
      priestId,
    });
    expect(completed[0].status).toBe("completed");
  });

  test("user cannot access priest functions", async () => {
    const t = convexTest(schema, modules);

    const asUser = t.withIdentity({
      subject: "regular123",
      email: "regular@example.com",
    });
    const viewer = await asUser.query(api.users.viewer);
    const userId = viewer!._id;

    await asUser.mutation(api.orders.createPendingOrderTest, {
      userId,
      items: [{ intention: "Test", quantity: 1 }],
      totalAmount: 1000,
      checkoutSessionId: "cs_auth_test",
    });

    await t.mutation(api.orders.completeOrderTest, {
      checkoutSessionId: "cs_auth_test",
    });

    const available = await t.query(api.massRequests.listAvailable, {});

    await expect(
      asUser.mutation(api.massRequests.accept, {
        requestId: available[0]._id,
        priestId: userId,
      }),
    ).rejects.toThrow();
  });

  test("multiple masses in single order", async () => {
    const t = convexTest(schema, modules);

    const asUser = t.withIdentity({
      subject: "multi123",
      email: "multi@example.com",
    });
    const viewer = await asUser.query(api.users.viewer);
    const userId = viewer!._id;

    await asUser.mutation(api.orders.createPendingOrderTest, {
      userId,
      items: [
        { intention: "Primeira intenção", quantity: 5 },
        { intention: "Segunda intenção", quantity: 3 },
      ],
      totalAmount: 8000,
      checkoutSessionId: "cs_multi_test",
    });

    await t.mutation(api.orders.completeOrderTest, {
      checkoutSessionId: "cs_multi_test",
    });

    const requests = await t.query(api.massRequests.listAvailable, {});
    expect(requests.length).toBe(8);

    const first = requests.filter(
      (r) => r.intentionName === "Primeira intenção",
    );
    expect(first.length).toBe(5);

    const second = requests.filter(
      (r) => r.intentionName === "Segunda intenção",
    );
    expect(second.length).toBe(3);
  });

  test("priest workflow: accept and complete", async () => {
    const t = convexTest(schema, modules);

    const asUser = t.withIdentity({
      subject: "user456",
      email: "user@test.com",
    });
    const viewer = await asUser.query(api.users.viewer);
    const userId = viewer!._id;

    await asUser.mutation(api.orders.createPendingOrderTest, {
      userId,
      items: [{ intention: "Test", quantity: 2 }],
      totalAmount: 2000,
      checkoutSessionId: "cs_two_priests",
    });

    await t.mutation(api.orders.completeOrderTest, {
      checkoutSessionId: "cs_two_priests",
    });

    const asPriest = t.withIdentity({
      subject: "priest456",
      email: "priest1@test.com",
    });
    const priestViewer = await asPriest.query(api.users.viewer);
    const priestId = priestViewer!._id;

    await asPriest.mutation(api.users.updateRole, {
      userId: priestId,
      role: "priest",
    });

    const available = await asPriest.query(api.massRequests.listAvailable, {});
    expect(available.length).toBe(2);

    await asPriest.mutation(api.massRequests.accept, {
      requestId: available[0]._id,
      priestId,
    });

    const accepted = await asPriest.query(api.massRequests.listByPriest, {
      priestId,
    });
    expect(accepted.length).toBe(1);
    expect(accepted[0].status).toBe("accepted");

    await asPriest.mutation(api.massRequests.complete, {
      requestId: available[0]._id,
    });

    const completed = await asPriest.query(api.massRequests.listByPriest, {
      priestId,
    });
    expect(completed[0].status).toBe("completed");

    const stillAvailable = await t.query(api.massRequests.listAvailable, {});
    expect(stillAvailable.length).toBe(1);
  });
});

// @ts-ignore
const modules = import.meta.glob("./**/*.ts");
