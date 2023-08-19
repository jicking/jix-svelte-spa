import { test, expect } from '@playwright/test';
import { APP_NAME } from '../src/shared/constants'

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(APP_NAME);
});

test('has expected links', async ({ page }) => {
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(page.getByRole("link", { name: "About" })).toBeVisible();
});

test("main navigation works", async ({ page }) => {
  await page.getByRole("link", { name: "Home" }).click();
  await expect(page.getByRole("heading", { name: "Home" })).toBeVisible();

  await page.getByRole("link", { name: "About" }).click();
  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();

  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
});
