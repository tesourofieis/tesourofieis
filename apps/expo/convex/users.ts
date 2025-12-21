import { query } from "./_generated/server";
import { v } from "convex/values";

export const getProfile = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId as any);
    if (!user) return null;
    
    return {
      userId: user._id,
      email: user.email,
      role: user.role,
    };
  },
});
