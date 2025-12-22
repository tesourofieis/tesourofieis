import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const getProfile = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const userId = args.userId as Id<"users">;
    const user = await ctx.db.get(userId);
    if (!user) return null;

    return {
      userId: user._id,
      email: user.email,
      role: user.role,
    };
  },
});

export const updateRole = mutation({
  args: {
    userId: v.string(),
    role: v.union(v.literal("user"), v.literal("priest")),
  },
  handler: async (ctx, args) => {
    const userId = args.userId as Id<"users">;
    await ctx.db.patch(userId, { role: args.role });
  },
});
