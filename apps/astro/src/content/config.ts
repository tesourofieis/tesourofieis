import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";

export const collections = {
  docs: defineCollection({
    type: "content_layer",
    loader: glob({ pattern: "src/**/*.{md,mdx}", base: "./content" }),
    schema: docsSchema(),
  }),
};
