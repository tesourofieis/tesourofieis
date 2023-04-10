import { defineCollection, z } from 'astro:content';

const baseSchema = z
	.object({
		title: z.string(),
		description: z.string().optional(),
	})
	.strict();

export const collections = {
	tesouro: defineCollection({
		schema: baseSchema,
	}),
};
