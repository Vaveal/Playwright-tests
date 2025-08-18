import {test} from '@playwright/test';
import { ForCreatorPage } from "../../pages/ForCreatorsPage";

ForCreatorPage.testParams.forEach(({ url, screenshotName, name}) => {
    test(`Проверка лейаута таба - ${name}`, async ({ page }) => {
        const forCreatorPage = new ForCreatorPage(page);
        await forCreatorPage.open(url);
        await forCreatorPage.pageHasCorrectLayout(screenshotName);
    });
});