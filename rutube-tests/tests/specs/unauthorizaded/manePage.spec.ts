import test from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедоров', async ({ page}) => {
   const mainPage = new MainPage(page);
   await mainPage.open();
   await mainPage.closePopupUnauthotizaded();
   await mainPage.closeCookiesAlert();
   await mainPage.headeHasCorrectAriaSnapshot();
});

test('Проверка доступности табов категории', async ({ page}) => {
   const mainPage = new MainPage(page);
   await mainPage.open();
   await mainPage.closePopupUnauthotizaded();
   await mainPage.closeCookiesAlert();
   await mainPage.categoriesTabsCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню', async ({ page}) => {
   const mainPage = new MainPage(page);
   await mainPage.open();
   await mainPage.closePopupUnauthotizaded();
   await mainPage.closeCookiesAlert();
   await mainPage.menuCorrectAriaSnapshot();
});