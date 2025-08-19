import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { SubscriptionsPage } from '../pages/SubsctiptionsPage';
import { CategoriesPage } from '../pages/CategoriesPage';

// Declare the types of your fixtures.
type MyFixtures = {
    mainPage: MainPage;
    categoriesPage: CategoriesPage;
    subscriptionsPage: SubscriptionsPage;
  };

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    // Set up the fixture.
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closePopupUnauthotizaded();
    await mainPage.closeCookiesAlert();
    // Use the fixture value in the test.
    await use(mainPage);

  },
  categoriesPage: async ({ page }, use) => {
    const categoriesPage = new CategoriesPage (page);
    await categoriesPage.open();
    await categoriesPage.closePopupUnauthotizaded();
    await categoriesPage.closeCookiesAlert();
    await categoriesPage.hideHeader();

    await use(categoriesPage);
  },
  subscriptionsPage: async ({ page }, use) => {
    // Set up the fixture.
    const subscriptionsPage = new SubscriptionsPage(page);
    await subscriptionsPage.open();
    await subscriptionsPage.closePopupUnauthotizaded();
    await subscriptionsPage.closeCookiesAlert();
    // Use the fixture value in the test.
    await use(subscriptionsPage);

  },
});
export { expect } from '@playwright/test';