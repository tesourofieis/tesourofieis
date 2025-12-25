import { convexTest } from "convex-test";
import { expect, test, describe } from "vitest";
import { api } from "./_generated/api";
import schema from "./schema";

describe("Timeout and Expiration Flow", () => {
  test("scheduled date validation respects past dates", async () => {
    const t = convexTest(schema, modules);

    const asUser = t.withIdentity({
      subject: "validation_user",
      email: "validation@test.com",
    });
    const viewer = await asUser.query(api.users.viewer);
    const userId = viewer!._id;

    const asPriest = t.withIdentity({
      subject: "validation_priest",
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
      items: [{ intention: "Test validation", quantity: 1 }],
      totalAmount: 1000,
      checkoutSessionId: "cs_validation_test",
    });

    await t.mutation(api.orders.completeOrderTest, {
      checkoutSessionId: "cs_validation_test",
    });

    const available = await asPriest.query(api.massRequests.listAvailable, {});
    expect(available.length).toBe(1);

    // Try to accept with date in the past
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
