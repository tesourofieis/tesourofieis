import { expect, test } from "@playwright/test";

test("title is correct", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Início | Tesouro dos Fiéis");
});
