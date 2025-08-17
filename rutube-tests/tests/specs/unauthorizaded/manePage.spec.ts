import {test, expect} from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедоров', async ({ mainPage }) => {
   await mainPage.headeHasCorrectAriaSnapshot();
});

test('Проверка доступности табов категории', async ({ mainPage }) => {
   await mainPage.categoriesTabsCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
   await mainPage.menuCorrectAriaSnapshot();
});