import {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {

private readonly headerLocator : Locator;
private readonly categoriesTabsLocator : Locator;
private readonly menuLocator : Locator;
private readonly headerAddButtonLocator: Locator;
private readonly headerAddButtonListLocator: Locator;
private readonly headerNotificationButtonLocator: Locator;
private readonly headerNotificatiListLocator: Locator;
private readonly headerlightModeLocator: Locator;
private readonly headerDarkModeLocator: Locator;
private readonly headerLoginButtonLocator: Locator;
private readonly fornRegistration: Locator;
private readonly menuButtonLocator: Locator;
private readonly openMenuAriaLocator: Locator;

constructor(page: Page) {
super(page);
this.headerLocator = this.page.getByRole('banner');
this.categoriesTabsLocator = this.page.getByRole('main').getByRole('list').first();
this.menuLocator = this.page.getByRole('navigation');
this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить'});
this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления'});
this.headerNotificatiListLocator = this.page.locator('.wdp-notifications-popup-module__wrapper');
this.headerAddButtonListLocator = this.page.getByRole('list').first();
this.headerlightModeLocator = this.page.getByRole('button', { name: 'Переключить на светлую тему'});
this.headerDarkModeLocator = this.page.getByRole('button', { name: 'Переключить на тёмную тему'});
this.headerLoginButtonLocator = this.page.getByRole('button', {name: 'Вход и регистрация'});
this.fornRegistration = this.page.locator('iframe[title="Multipass"]').contentFrame().getByRole('form');
this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
this.openMenuAriaLocator = this.page.getByRole('navigation');
}

    async open() {
        await this.page.goto('https://rutube.ru/');
    }
    
    async headerChangelightMode() {
        await this.headerlightModeLocator.click();
    }
    
    async headerChangeDarkMode() {
        await this.headerDarkModeLocator.click();
    }
    
    async changeModeAttributeValue(attributeValue: 'light' | 'dark') {
        await expect(this.page.locator('html')).toHaveAttribute('data-themeid', attributeValue);
    }

    async openAddPopuplist() {
        await this.headerAddButtonLocator.click();
    }

    async openNotificationlist() {
        await this.headerNotificationButtonLocator.click();
    }

    async openAutorizationModal() {
        await this.headerLoginButtonLocator.click();
    }

    async openFillMenu() {
        await this.menuButtonLocator.click();
    }

    async headerHasCorrectAriaSnapshot() {
        await expect(this.headerLocator).toMatchAriaSnapshot({name: 'headerAriaShapshot.yml'});
    }

    async categoriesTabsCorrectAriaSnapshot() {
        await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({name: 'categoriesAriaShapshot.yml'});
    }

    async menuCorrectAriaSnapshot() {
        await expect(this.menuLocator).toMatchAriaSnapshot({name: 'menuAriaShapshot.yml'});
    }

    async addButtonListAriaSnapshot() {
        await expect(this.headerAddButtonListLocator).toMatchAriaSnapshot({name: 'AddButtonListShapshot.yml'});
    }

    async NotificatiListAriaSnapshot() {
        await expect(this.headerNotificatiListLocator).toMatchAriaSnapshot({name: 'NotificatiListShapshot.yml'});
    }

    async autorizationModalAriaSnapshot() {
        await expect(this.fornRegistration).toMatchAriaSnapshot({name: 'fornRegistrationShapshot.yml'});
    }

    async fullMenuAriaSnapshot() {
        await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({name: 'fullMenuShapshot.yml'});
    }

}