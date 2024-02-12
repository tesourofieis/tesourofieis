import { test, expect } from "@playwright/test";

test("meta is correct", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Início | Tesouro dos Fiéis");
});
