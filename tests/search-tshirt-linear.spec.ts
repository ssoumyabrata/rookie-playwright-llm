import { test, expect } from '@playwright/test';

test('search for t-shirt and verify result', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('http://www.automationpractice.pl/index.php');

  // 2. Search for "t-shirt"
  await page.getByRole('textbox', { name: 'Search' }).fill('t-shirt');
  await page.getByRole('button', { name: '' }).click();

  // 3. Verify the 'Faded Short Sleeve T-shirts' in the search results only (first visible link)
  const searchResult = page.locator('#center_column').getByRole('link', { name: /Faded Short Sleeve T-shirts/i }).first();
  await expect(searchResult).toBeVisible();
});
