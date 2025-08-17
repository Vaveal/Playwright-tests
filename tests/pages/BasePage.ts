import { Page } from "@playwright/test";

export class BasePage {
    readonly page: Page

    constructor(page: Page){
        this.page = page;
    }

    async closePopupUnauthotizaded () {
            await this.page.getByRole('button', { name: 'Закрыть' }).click();
    }
    
    async closeCookiesAlert () {
            await this.page.getByRole('complementary').getByRole('button', {name: 'Ок'}).click();
    }
}
