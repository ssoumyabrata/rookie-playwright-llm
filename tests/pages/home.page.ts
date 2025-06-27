import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly searchResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: 'Search' });
    this.searchButton = page.getByRole('button', { name: '' });
    this.searchResult = page.locator('#center_column').getByRole('link', { name: /Faded Short Sleeve T-shirts/i }).first();
  }

  async goto() {
    await this.page.goto('http://www.automationpractice.pl/index.php');
  }

  async searchFor(query: string) {
    await this.searchBox.fill(query);
    await this.searchButton.click();
  }

  async expectFadedShortSleeveTShirtVisible() {
    await expect(this.searchResult).toBeVisible();
  }
}
