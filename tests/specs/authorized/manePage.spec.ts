import {test, expect} from '../../fixtures/fixturesAuthorizaded';

test('Проверка доступности элементов хедоров авторизованного пользователя', async ({ mainPage }) => {
   await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов pop-up уведомлений авторизованного пользователя', async ({ mainPage }) => {
   await mainPage.openNotificationlist();
   await mainPage.NotificatiListAriaSnapshot();
});

test('Проверка доступности элементов меню авторизованного пользователя', async ({ mainPage }) => {
   await mainPage.openFillMenu();
   await mainPage.fullMenuAriaSnapshot();
});

test('Проверка доступности элементов меню пользователя в хедере авторизованного пользователя', async ({ mainPage }) => {
   await mainPage.openHeaderUserMenu();
   await mainPage.headerUserMenuAriaSnapshot();
});