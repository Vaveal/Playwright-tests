import {test, expect} from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедоров', async ({ page }) => {
   const mainPage = new MainPage(page);
   await mainPage.open();
   await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов pop-up уведомлений', async ({ page }) => {
   const mainPage = new MainPage(page);
   await mainPage.open();
   await mainPage.openNotificationlist();
   await mainPage.NotificatiListAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню', async ({ page }) => {
   const mainPage = new MainPage(page);
   await mainPage.open();
   await mainPage.openFillMenu();
   await mainPage.fullMenuAriaSnapshot();
});