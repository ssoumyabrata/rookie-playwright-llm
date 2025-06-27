import { test } from '@playwright/test';
import { HomePage } from './pages/home.page';

// POM-based test for searching t-shirt and verifying result

test('search for t-shirt and verify Faded short sleeve t-shirts is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.searchFor('t-shirt');
  await homePage.expectFadedShortSleeveTShirtVisible();
});
