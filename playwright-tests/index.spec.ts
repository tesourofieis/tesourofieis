import { expect, test } from "@playwright/test";

test("navigation", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Início | Tesouro dos Fiéis");
  
  await page.getByText('Em Portugal se conservará').click();
  await page.getByRole('heading', { name: 'Dia e Hora' }).click();
  await page.getByText('Muda a Missa, o Ofício, o').click();
  await page.getByLabel('add-notifications').click();
  await page.getByRole('link', { name: 'Dia Variável' }).click()
  await page.getByRole('heading', { name: 'Missa do Dia' }).click();
  await page.getByRole('heading', { name: 'Introitus' }).click();
  await page.locator('.w-0 > .fixed').click();
  await page.locator('.w-48 > .fixed').click();;
  await page.getByRole('link', { name: 'Tesouro dos Fiéis' }).click();
  await page.getByRole('link', { name: 'Rosario' }).click();
  await page.getByRole('heading', { name: 'Rosário', exact: true }).click();
  await page.getByRole('link', { name: 'Ave Maria' }).click();
  await page.getByText('℣. Ave, María, grátia plena,').click();
  await page.locator('summary').filter({ hasText: 'Advento' }).locator('svg').click();
  await page.getByRole('link', { name: 'Advento', exact: true }).click();
  await page.getByRole('main').getByRole('link', { name: 'Primeiro Domingo do Advento', exact: true }).click();
  await page.getByText('Ad te levávi ánimam meam: Deus meus, in te confíde, non erubéscam: neque irrí').click();
});

test("search", async ({page}) => {
  await page.goto("/");

await page.keyboard.press('/');
await page.getByText('A pesquisa está disponível').click();
await page.getByRole('dialog', { name: 'Pesquisar' }).press('Escape');
})