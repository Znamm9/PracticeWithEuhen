import { expect, type Locator, type Page } from '@playwright/test';

export class WikiLandingPage {
  readonly page: Page;
  readonly getHeader: Locator;
  readonly getLanguages: Locator;
  readonly engLanguage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getHeader = this.page.locator("//h1[@class='central-textlogo-wrapper']");
    this.getLanguages = this.page.locator("//nav[@aria-label='Top languages']//div[contains(@class, 'lang')]");
    this.engLanguage = this.page.locator("//a[@id='js-link-box-en']");
  }

  async navigate() {
    await this.page.goto("https://www.wikipedia.org/");
  }
}