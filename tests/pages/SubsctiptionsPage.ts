import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SubscriptionsPage extends BasePage {

private readonly mySubscriptions: Locator;

    constructor(page: Page) {
    super(page);
        this.mySubscriptions = this.page.locator('.my-module__wrapper');
    }

    async open() {
        await this.page.goto('https://rutube.ru/my/subscriptions/');
    }

    async contentHasAriaSnapshot() {
        await this.checkAriaSnapshot(this.mySubscriptions, 'contentHasAriaSnapshot.yml');
    }

}