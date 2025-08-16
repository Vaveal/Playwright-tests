import {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {

private readonly headerLocator : Locator;
private readonly categoriesTabsLocator : Locator;
private readonly menuLocator : Locator;

constructor(page: Page) {
super(page);
this.headerLocator = this.page.getByRole('banner');
this.categoriesTabsLocator = this.page.getByRole('main').getByRole('list').first();
this.menuLocator = this.page.getByRole('navigation');
}

    async open() {
        await this.page.goto('https://rutube.ru/');
    }
    
    async headeHasCorrectAriaSnapshot() {
        await expect(this.headerLocator).toMatchAriaSnapshot();
    }

    async categoriesTabsCorrectAriaSnapshot() {
        await expect(this.categoriesTabsLocator).toMatchAriaSnapshot();
    }

    async menuCorrectAriaSnapshot() {
        await expect(this.menuLocator).toMatchAriaSnapshot();
    }
    
}

