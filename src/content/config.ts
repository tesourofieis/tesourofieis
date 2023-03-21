import { defineCollection, z } from 'astro:content';

export const baseSchema = z
	.object({
		type: z.literal('base').optional().default('base'),
		title: z.string(),
		description: z.string().optional(),
		i18nReady: z.boolean().default(false),
		githubURL: z.string().url().optional(),
		hasREADME: z.boolean().optional(),
	})
	.strict();

const docs = defineCollection({
	schema: baseSchema,
});

export const collections = { docs };
