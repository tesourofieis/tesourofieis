import { expect, test } from "@playwright/test";

test("first page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Início | Tesouro dos Fiéis");

  page.getByText("Em Portugal se conservará");
  page.getByRole("heading", { name: "Dia e Hora" });
  page.getByText("Muda a Missa, o Ofício, o");
  page.getByLabel("add-notifications");
});

test("rosary", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Rosario" }).click();
  page.getByRole("heading", { name: "Rosário", exact: true });
  page.getByRole("link", { name: "Ave Maria" });
  page.getByText("℣. Ave, María, grátia plena,");
});

test("missal", async ({ page }) => {
  await page.goto("/");

  await page
    .locator("summary")
    .filter({ hasText: "Advento" })
    .locator("svg")
    .click();
  await page.getByRole("link", { name: "Advento", exact: true }).click();
  await page
    .getByRole("main")
    .getByRole("link", { name: "Primeiro Domingo do Advento", exact: true })
    .click();
  page.getByText(
    "Ad te levávi ánimam meam: Deus meus, in te confíde, non erubéscam: neque irrí",
  );
});

test("search", async ({ page }) => {
  await page.keyboard.press("/");
  page.getByText("A pesquisa está disponível");
});
