import { v } from "convex/values";
import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { auth } from "./auth";

export const viewer = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) return null;

    const user = await ctx.db.get(userId);
    if (!user) return null;

    return {
      ...user,
      email: user.email ?? "",
      role: (user.role ?? "user") as "user" | "priest" | "admin",
    };
  },
});

export const updateRole = mutation({
  args: {
    userId: v.id("users"),
    role: v.union(v.literal("user"), v.literal("priest"), v.literal("admin")),
  },
  handler: async (ctx, args) => {
    const userId = args.userId as Id<"users">;
    await ctx.db.patch(userId, { role: args.role });
  },
});
