import { test, expect } from '@playwright/test';
import { WikiLandingPage } from '../po/landing-page';
import { WikiHomePage } from '../po/home-page';

test.describe('wiki tests', () => {
  let landingPage: WikiLandingPage;
  let home: WikiHomePage;

  test.beforeEach(async ({page}) => {
    landingPage = new WikiLandingPage(page);
    home = new WikiHomePage(page);
    await landingPage.navigate();
  })

  test('open landing and check header existance', async ({page}) => {
    await expect(landingPage.getHeader).toBeVisible();
  })
  
  test('open landing and check languages', async ({page}) => {
    expect(await landingPage.getLanguages.all()).toHaveLength(10);
  })
  
  test("open landing and navigate to eng version", async({page}) => {  
    await landingPage.engLanguage.click();
  
    expect(await page.url()).toBe("https://en.wikipedia.org/wiki/Main_Page");
    await expect(home.logo).toBeVisible();
  })
})
