import { convexTest } from "convex-test";
import { expect, test, describe } from "vitest";
import { api } from "./_generated/api";
import schema from "./schema";

describe("Priest Date Filtering", () => {
  test("priest sees only requests that don't conflict with their schedule", async () => {
    const t = convexTest(schema, modules);

    // Create user and priest
    const asUser = t.withIdentity({
      subject: "user123",
      email: "user@example.com",
    });

    const asPriest = t.withIdentity({
      subject: "priest123",
      email: "priest@example.com",
    });

    // Set priest role
    const priestViewer = await asPriest.query(api.users.viewer);
    const priestId = priestViewer!._id;
    await asPriest.mutation(api.users.updateRole, {
      userId: priestId,
      role: "priest",
    });

    // Create mass request with specific date range
    await asUser.mutation(api.orders.createPendingOrderTest, {
      userId: (await asUser.query(api.users.viewer))!._id,
      items: [
        {
          intention: "Test request with date range",
          quantity: 1,
          preferredStartDate: Date.now() + 10 * 24 * 60 * 60 * 1000, // 10 days from now
          preferredEndDate: Date.now() + 20 * 24 * 60 * 60 * 1000, // 20 days from now
        },
      ],
      totalAmount: 1000,
      checkoutSessionId: "cs_date_filtering_test",
    });

    await t.mutation(api.orders.completeOrderTest, {
      checkoutSessionId: "cs_date_filtering_test",
    });

    // Priest accepts a mass that conflicts with preferred range
    const allAvailable = await t.query(api.massRequests.listAvailable, {});
    const priestAvailable = await t.query(
      api.massRequests.listAvailableForPriest,
      {
        priestId,
      },
    );

    // Priest should see fewer requests (filtered by their schedule)
    expect(priestAvailable.length).toBeLessThan(allAvailable.length);
    expect(allAvailable.length).toBe(1);
    expect(priestAvailable.length).toBe(0);

    console.log(
      "All available:",
      allAvailable.map((r) => ({
        intention: r.intentionName,
        preferredStart: r.preferredStartDate,
        preferredEnd: r.preferredEndDate,
      })),
    );
    console.log("Priest available:", priestAvailable.length);
  });
});

// @ts-ignore
const modules = import.meta.glob("./**/*.ts");
