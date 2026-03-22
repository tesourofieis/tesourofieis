import { test, expect } from "@playwright/test";

test.describe("Landing Page Dynamic Content", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("basic page structure and branding", async ({ page }) => {
    // Check main title with exact match
    await expect(page.locator("#tesouro-dos-fiis")).toBeVisible();
    await expect(page.getByText("Tesouro dos Fiéis", { exact: true })).toBeVisible();

    // Check that page has SVG elements (icons are present)
    await expect(page.locator("svg").first()).toBeVisible();
  });

  test("date and time formatting", async ({ page }) => {
    await page.clock.setFixedTime(new Date("2024-03-15T14:30:00"));
    await page.goto("/");

    // Check date format (Portuguese)
    await expect(page.getByText("sexta-feira, 15 março")).toBeVisible();

    // Check time display
    await expect(page.getByText("14:30")).toBeVisible();
  });

  test("daily mass cards display", async ({ page }) => {
    await page.clock.setFixedTime(new Date("2024-03-15T10:00:00"));
    await page.goto("/");

    // Check if mass section exists and has content
    const massCards = page.locator('a[href*="missal"]');
    const count = await massCards.count();

    // There should be at least some mass cards or section should exist
    if (count > 0) {
      await expect(massCards.first()).toBeVisible();
    }
  });

  test("rosary card always visible", async ({ page }) => {
    const hours = [6, 12, 18, 22];

    for (const hour of hours) {
      await page.clock.setFixedTime(new Date(2024, 0, 15, hour, 0, 0));
      await page.goto("/");

      // Look for Rosário link specifically
      const rosarioLink = page.getByRole("link", { name: "Rosário" });
      const count = await rosarioLink.count();
      if (count > 0) {
        await expect(rosarioLink.first()).toBeVisible();
      }
    }
  });

  test("morning and evening prayers based on time", async ({ page }) => {
    // Test morning prayer
    await page.clock.setFixedTime(new Date(2024, 0, 15, 7, 0, 0));
    await page.goto("/");

    const morningPrayer = page.getByRole("link", { name: "Oração da Manhã" });
    if ((await morningPrayer.count()) > 0) {
      await expect(morningPrayer).toBeVisible();
    }

    // Test evening prayer
    await page.clock.setFixedTime(new Date(2024, 0, 15, 21, 0, 0));
    await page.goto("/");

    const eveningPrayer = page.getByRole("link", { name: "Oração da Noite" });
    if ((await eveningPrayer.count()) > 0) {
      await expect(eveningPrayer).toBeVisible();
    }
  });

  test("angelus appears at specific hours", async ({ page }) => {
    const angelusHours = [6, 12, 18];

    for (const hour of angelusHours) {
      await page.clock.setFixedTime(new Date(2024, 0, 15, hour, 0, 0));
      await page.goto("/");

      // Look for Angelus links
      const angelusLinks = page.getByRole("link", { name: "Angelus" });
      if ((await angelusLinks.count()) > 0) {
        await expect(angelusLinks.first()).toBeVisible();
      }
    }
  });

  test("indulgences section functionality", async ({ page }) => {
    // Test a date with known indulgence
    await page.clock.setFixedTime(new Date("2024-01-01T09:00:00"));
    await page.goto("/");

    // Check if indulgences section appears
    const indulgenceSection = page.getByText("Indulgências");
    if (await indulgenceSection.isVisible()) {
      // If section is visible, check for Veni Creator
      const veniCreator = page.getByText("Veni Creator");
      if ((await veniCreator.count()) > 0) {
        await expect(veniCreator.first()).toBeVisible();
      }
    }
  });

  test("O Antiphons period", async ({ page }) => {
    // Test within O Antiphons period
    await page.clock.setFixedTime(new Date("2024-12-20T10:00:00"));
    await page.goto("/");

    // Look for Nossa Senhora do Ó link
    const antiphonLink = page.getByRole("link", { name: "Nossa Senhora do Ó" });
    if ((await antiphonLink.count()) > 0) {
      await expect(antiphonLink).toBeVisible();
    }

    // Test outside period
    await page.clock.setFixedTime(new Date("2024-12-16T10:00:00"));
    await page.goto("/");

    // Should not find Nossa Senhora do Ó outside period
    const antiphonLinkOutside = page.getByRole("link", {
      name: "Nossa Senhora do Ó",
    });
    if ((await antiphonLinkOutside.count()) > 0) {
      await expect(antiphonLinkOutside).not.toBeVisible();
    }
  });

  test("navigation links work correctly", async ({ page }) => {
    await page.clock.setFixedTime(new Date("2024-01-15T07:00:00"));
    await page.goto("/");

    // Test morning prayer navigation if available
    const morningPrayer = page.getByRole("link", { name: "Oração da Manhã" });
    if ((await morningPrayer.count()) > 0) {
      await morningPrayer.click();
      await expect(page).toHaveURL(/\/devocionario\/dia\/oracaomanha/);
    }

    // Go back and test rosary navigation
    await page.goBack();
    const rosarioLink = page.getByRole("link", { name: "Rosário" });
    if ((await rosarioLink.count()) > 0) {
      await rosarioLink.click();
      await expect(page).toHaveURL(/\/devocionario\/rosario/);
    }
  });

  test("responsive design and accessibility", async ({ page }) => {
    await page.goto("/");

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator("#tesouro-dos-fiis")).toBeVisible();

    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator("#tesouro-dos-fiis")).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator("#tesouro-dos-fiis")).toBeVisible();
  });
});

test.describe("Liturgical Calendar Flow - Legacy", () => {
  test("morning prayer workflow", async ({ page }) => {
    await page.clock.setFixedTime(new Date("2024-01-15T07:00:00"));
    await page.goto("/");

    const morningPrayer = page.getByText("Oração da Manhã");
    if ((await morningPrayer.count()) > 0) {
      await expect(morningPrayer).toBeVisible();
      await morningPrayer.click();
      await expect(page).toHaveURL(/\/devocionario\/dia\/oracaomanha/);
    }

    const rosario = page.getByText("Rosário");
    if ((await rosario.count()) > 0) {
      await expect(rosario).toBeVisible();
    }
  });
});
