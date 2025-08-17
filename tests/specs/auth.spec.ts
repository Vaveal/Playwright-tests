import {test, expect} from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');
chromium.use(stealth());

test('Авторизация', async ( ) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const mainPage = new MainPage(page);
    const formAuthorizatin = page.locator('iframe[title="Multipass"]').contentFrame().getByRole('form');
    await mainPage.open();
    await mainPage.closePopupUnauthotizaded();
    await mainPage.closeCookiesAlert();
    await mainPage.openAutorizationModal();
    await expect(formAuthorizatin.getByRole('heading', { name: 'Вход или регистрация' })).toBeVisible();
    await formAuthorizatin.getByRole('textbox', { name: 'Введите телефон' }).fill(process.env.LOGIN!);
    await formAuthorizatin.getByRole('button', { name: 'Продолжить' }).click();
    await expect(formAuthorizatin.getByText(`Введите пароль для профиля с почтой ${process.env.LOGIN}`)).toBeVisible();
    await formAuthorizatin.getByRole('textbox').fill(process.env.PASSWORD!);
    await formAuthorizatin.getByRole('button', { name: 'Войти', exact: true }).click();
    await page.getByAltText(`Иконка канала ${process.env.CHANNEL}`).click();
    await page.getByRole('listitem').first().click();
    
    await page.context().storageState({ path: authFile });
});