import { mutation } from "./_generated/server";
import { v } from "convex/values";

// NOTA: Em produção, usar bcryptjs para hash de passwords
// npm install bcryptjs
// import { hash, compare } from "bcryptjs";

export const signUp = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    
    if (existing) {
      return { success: false, error: "Email já existe" };
    }
    
    // Em produção: const passwordHash = await hash(args.password, 10);
    const passwordHash = args.password; // APENAS PARA DESENVOLVIMENTO
    
    await ctx.db.insert("users", {
      email: args.email,
      passwordHash,
      role: "user",
    });
    
    return { success: true };
  },
});

export const signIn = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    
    if (!user) {
      return { success: false, error: "Credenciais inválidas" };
    }
    
    // Em produção: const valid = await compare(args.password, user.passwordHash);
    const valid = args.password === user.passwordHash; // APENAS PARA DESENVOLVIMENTO
    
    if (!valid) {
      return { success: false, error: "Credenciais inválidas" };
    }
    
    return { success: true, userId: user._id };
  },
});
