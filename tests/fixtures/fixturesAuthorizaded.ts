import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import {SubscriptionsPage} from '../pages/SubsctiptionsPage'

// Declare the types of your fixtures.
type MyFixtures = {
    mainPage: MainPage;
    subscriptionsPage: SubscriptionsPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    // Set up the fixture.
    const mainPage = new MainPage(page);
    await mainPage.open();
    // Use the fixture value in the test.
    await use(mainPage);

  },
   subscriptionsPage: async ({ page }, use) => {
      // Set up the fixture.
      const subscriptionsPage = new SubscriptionsPage(page);
      await subscriptionsPage.open();
      // Use the fixture value in the test.
      await use(subscriptionsPage);
  
    },
});
export { expect } from '@playwright/test';