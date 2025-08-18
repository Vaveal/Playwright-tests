import {test, expect} from '../../fixtures/fixturesUnauthorizaded';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедоров неавторизованного пользователя', async ({ mainPage }) => {
   await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности табов категории неавторизованного пользователя', async ({ mainPage }) => {
   await mainPage.categoriesTabsCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню неавторизованного пользователя', async ({ mainPage }) => {
   await mainPage.menuCorrectAriaSnapshot();
});

test('Проверка доступности элементов списка добавления контента неавторизованного пользователя', async ({ mainPage }) => {
   await mainPage.openAddPopuplist();
   await mainPage.addButtonListAriaSnapshot();
});

test('Проверка доступности элементов pop-up уведомлений неавторизованного пользователя', async ({ mainPage }) => {
   await mainPage.openNotificationlist();
   await mainPage.NotificatiListAriaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации неавторизованного пользователя', async ({ mainPage }) => {
   await mainPage.openAutorizationModal();
   await mainPage.autorizationModalAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню неавторизованного пользователя', async ({ mainPage }) => {
   await mainPage.openFillMenu();
   await mainPage.fullMenuAriaSnapshot();
});

test('Переключение темы', async ({ mainPage }) => {
   await mainPage.changeModeAttributeValue('dark');
   await mainPage.headerChangelightMode();
   await mainPage.changeModeAttributeValue('light');
});