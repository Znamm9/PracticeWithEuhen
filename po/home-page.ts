import { expect, type Locator, type Page } from '@playwright/test';

export class WikiHomePage {
  readonly page: Page;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = this.page.locator("//img[@alt='Wikipedia']");
  }

  async navigate() {
    await this.page.goto("https://en.wikipedia.org/wiki/Main_Page");
  }
}