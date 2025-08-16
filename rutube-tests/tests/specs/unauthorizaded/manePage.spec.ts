import test from '@playwright/test';
import { ManePage } from '../../pages/MainPahe';

test('Открытие главной страницы', async ({ page}) => {
   const mainPage = new ManePage(page);
   await  mainPage.open();
});