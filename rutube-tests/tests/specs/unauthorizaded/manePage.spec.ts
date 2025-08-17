import {test, expect} from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедоров', async ({ mainPage }) => {
   await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности табов категории', async ({ mainPage }) => {
   await mainPage.categoriesTabsCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
   await mainPage.menuCorrectAriaSnapshot();
});

test('Проверка доступности элементов списка добавления контента', async ({ mainPage }) => {
   await mainPage.openAddPopuplist();
   await mainPage.addButtonListAriaSnapshot();
});

test('Проверка доступности элементов pop-up уведомлений', async ({ mainPage }) => {
   await mainPage.openNotificationlist();
   await mainPage.NotificatiListAriaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации', async ({ mainPage }) => {
   await mainPage.openAutorizationModal();
   await mainPage.autorizationModalAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
   await mainPage.openFillMenu();
   await mainPage.fullMenuAriaSnapshot();
});

test('Переключение темы', async ({ mainPage }) => {
   await mainPage.changeModeAttributeValue('dark');
   await mainPage.headerChangelightMode();
   await mainPage.changeModeAttributeValue('light');
});