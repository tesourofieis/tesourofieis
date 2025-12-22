import { convexTest } from "convex-test";
import { expect, test, describe } from "vitest";
import { api } from "./_generated/api";
import schema from "./schema";

describe("Mass Requests Flow", () => {
  test("complete user journey: signup → add to cart → checkout → payment success", async () => {
    const t = convexTest(schema, modules);

    // User signup
    const signUpResult = await t.mutation(api.auth.signUp, {
      email: "user@example.com",
      password: "password123",
    });
    expect(signUpResult.success).toBe(true);

    // User login
    const signInResult = await t.mutation(api.auth.signIn, {
      email: "user@example.com",
      password: "password123",
    });
    expect(signInResult.success).toBe(true);
    expect(signInResult.userId).toBeDefined();
    const userId = signInResult.userId!;

    // Verify user profile
    const profile = await t.query(api.users.getProfile, { userId });
    expect(profile?.role).toBe("user");
    expect(profile?.email).toBe("user@example.com");

    // Create cart items
    const cartItems = [
      { intention: "Eterno descanso de João Silva", quantity: 1 },
      { intention: "Saúde de Maria Santos", quantity: 2 },
    ];
    const totalAmount = 3 * 1000; // 3 masses × €10
    const checkoutSessionId = "cs_test_123";

    // Create order directly (bypassing Stripe)
    await t.mutation(api.orders.createPendingOrderTest, {
      userId,
      items: cartItems,
      totalAmount,
      checkoutSessionId,
    });

    // Verify order was created as pending
    const orders = await t.query(api.orders.listUserOrders, { userId });
    expect(orders.length).toBe(1);
    expect(orders[0].status).toBe("pending_payment");
    expect(orders[0].totalAmount).toBe(totalAmount);
    expect(orders[0].items).toEqual(cartItems);

    // Simulate Stripe webhook for successful payment
    await t.mutation(api.orders.completeOrder, { checkoutSessionId });

    // Verify order is now paid
    const paidOrders = await t.query(api.orders.listUserOrders, { userId });
    expect(paidOrders[0].status).toBe("paid");

    // Verify mass requests were created
    const availableRequests = await t.query(api.massRequests.listAvailable, {});
    expect(availableRequests.length).toBe(3); // 1 + 2 masses
    expect(availableRequests.every((r) => r.status === "available")).toBe(true);
  });

  test("payment cancellation flow", async () => {
    const t = convexTest(schema, modules);

    // Setup user
    await t.mutation(api.auth.signUp, {
      email: "cancel@example.com",
      password: "pass123",
    });
    const { userId } = await t.mutation(api.auth.signIn, {
      email: "cancel@example.com",
      password: "pass123",
    });

    // Create pending order
    await t.mutation(api.orders.createPendingOrderTest, {
      userId: userId!,
      items: [{ intention: "Test intention", quantity: 1 }],
      totalAmount: 1000,
      checkoutSessionId: "cs_cancel_123",
    });

    // User navigates to cancel URL - order remains pending
    const orders = await t.query(api.orders.listUserOrders, { userId: userId! });
    expect(orders[0].status).toBe("pending_payment");

    // Mass requests should not be created for unpaid orders
    const requests = await t.query(api.massRequests.listAvailable, {});
    expect(requests.length).toBe(0);
  });

  test("priest accepts and completes mass request", async () => {
    const t = convexTest(schema, modules);

    // Create user and make payment
    await t.mutation(api.auth.signUp, {
      email: "faithful@example.com",
      password: "pass123",
    });
    const { userId } = await t.mutation(api.auth.signIn, {
      email: "faithful@example.com",
      password: "pass123",
    });

    await t.mutation(api.orders.createPendingOrderTest, {
      userId: userId!,
      items: [{ intention: "Pela família", quantity: 1 }],
      totalAmount: 1000,
      checkoutSessionId: "cs_priest_test",
    });

    await t.mutation(api.orders.completeOrder, { 
      checkoutSessionId: "cs_priest_test"
    });

    // Create priest
    await t.mutation(api.auth.signUp, {
      email: "priest@example.com",
      password: "pass123",
    });
    const priestSignIn = await t.mutation(api.auth.signIn, {
      email: "priest@example.com",
      password: "pass123",
    });
    const priestId = priestSignIn.userId!;

    // Update priest role
    await t.mutation(api.users.updateRole, {
      userId: priestId,
      role: "priest",
    });

    // Priest sees available requests
    const available = await t.query(api.massRequests.listAvailable, {});
    expect(available.length).toBe(1);
    expect(available[0].status).toBe("available");

    // Priest accepts request
    await t.mutation(api.massRequests.accept, {
      requestId: available[0]._id,
      priestId,
    });

    // Verify request is accepted
    const accepted = await t.query(api.massRequests.listByPriest, { priestId });
    expect(accepted.length).toBe(1);
    expect(accepted[0].status).toBe("accepted");
    expect(accepted[0].priestId).toBe(priestId);

    // Available list should be empty now
    const stillAvailable = await t.query(api.massRequests.listAvailable, {});
    expect(stillAvailable.length).toBe(0);

    // Priest completes mass
    await t.mutation(api.massRequests.complete, {
      requestId: accepted[0]._id,
    });

    // Verify completion
    const completed = await t.query(api.massRequests.listByPriest, { priestId });
    expect(completed[0].status).toBe("completed");
  });

  test("user cannot access priest functions", async () => {
    const t = convexTest(schema, modules);

    await t.mutation(api.auth.signUp, {
      email: "regular@example.com",
      password: "pass123",
    });
    const { userId } = await t.mutation(api.auth.signIn, {
      email: "regular@example.com",
      password: "pass123",
    });

    // Create a request first
    await t.mutation(api.orders.createPendingOrderTest, {
      userId: userId!,
      items: [{ intention: "Test", quantity: 1 }],
      totalAmount: 1000,
      checkoutSessionId: "cs_auth_test",
    });

    await t.mutation(api.orders.completeOrder, { 
      checkoutSessionId: "cs_auth_test"
    });

    const available = await t.query(api.massRequests.listAvailable, {});

    // Regular user tries to accept - should fail
    await expect(
      t.mutation(api.massRequests.accept, {
        requestId: available[0]._id,
        priestId: userId!,
      })
    ).rejects.toThrow();
  });

  test("duplicate email signup fails", async () => {
    const t = convexTest(schema, modules);

    await t.mutation(api.auth.signUp, {
      email: "duplicate@example.com",
      password: "pass123",
    });

    const secondSignup = await t.mutation(api.auth.signUp, {
      email: "duplicate@example.com",
      password: "different",
    });

    expect(secondSignup.success).toBe(false);
    expect(secondSignup.error).toBeDefined();
  });

  test("invalid login credentials", async () => {
    const t = convexTest(schema, modules);

    await t.mutation(api.auth.signUp, {
      email: "valid@example.com",
      password: "correct",
    });

    const wrongPassword = await t.mutation(api.auth.signIn, {
      email: "valid@example.com",
      password: "wrong",
    });

    expect(wrongPassword.success).toBe(false);
    expect(wrongPassword.userId).toBeUndefined();
  });

  test("multiple masses in single order", async () => {
    const t = convexTest(schema, modules);

    await t.mutation(api.auth.signUp, {
      email: "multi@example.com",
      password: "pass123",
    });
    const { userId } = await t.mutation(api.auth.signIn, {
      email: "multi@example.com",
      password: "pass123",
    });

    await t.mutation(api.orders.createPendingOrderTest, {
      userId: userId!,
      items: [
        { intention: "Primeira intenção", quantity: 5 },
        { intention: "Segunda intenção", quantity: 3 },
      ],
      totalAmount: 8000,
      checkoutSessionId: "cs_multi_test",
    });

    await t.mutation(api.orders.completeOrder, { 
      checkoutSessionId: "cs_multi_test"
    });

    // Should create 8 individual mass requests
    const requests = await t.query(api.massRequests.listAvailable, {});
    expect(requests.length).toBe(8);

    // 5 with first intention
    const first = requests.filter((r) => r.intentionName === "Primeira intenção");
    expect(first.length).toBe(5);

    // 3 with second intention
    const second = requests.filter((r) => r.intentionName === "Segunda intenção");
    expect(second.length).toBe(3);
  });

  test("priest workflow: accept and complete", async () => {
    const t = convexTest(schema, modules);

    // Setup user and payment
    await t.mutation(api.auth.signUp, {
      email: "user@test.com",
      password: "pass",
    });
    const { userId } = await t.mutation(api.auth.signIn, {
      email: "user@test.com",
      password: "pass",
    });

    await t.mutation(api.orders.createPendingOrderTest, {
      userId: userId!,
      items: [{ intention: "Test", quantity: 2 }],
      totalAmount: 2000,
      checkoutSessionId: "cs_two_priests",
    });

    await t.mutation(api.orders.completeOrder, { 
      checkoutSessionId: "cs_two_priests"
    });

    // Create priest
    await t.mutation(api.auth.signUp, {
      email: "priest1@test.com",
      password: "pass",
    });
    const priest1 = await t.mutation(api.auth.signIn, {
      email: "priest1@test.com",
      password: "pass",
    });
    await t.mutation(api.users.updateRole, {
      userId: priest1.userId!,
      role: "priest",
    });

    // Priest accepts request
    const available = await t.query(api.massRequests.listAvailable, {});
    expect(available.length).toBe(2);
    
    await t.mutation(api.massRequests.accept, {
      requestId: available[0]._id,
      priestId: priest1.userId!,
    });

    // Verify accepted status
    const accepted = await t.query(api.massRequests.listByPriest, {
      priestId: priest1.userId!,
    });
    expect(accepted.length).toBe(1);
    expect(accepted[0].status).toBe("accepted");

    // Priest completes their mass
    await t.mutation(api.massRequests.complete, {
      requestId: available[0]._id,
    });

    const completed = await t.query(api.massRequests.listByPriest, {
      priestId: priest1.userId!,
    });
    expect(completed[0].status).toBe("completed");

    // Second request remains available for another priest
    const stillAvailable = await t.query(api.massRequests.listAvailable, {});
    expect(stillAvailable.length).toBe(1);
  });
});

const modules = import.meta.glob("./**/*.ts");
