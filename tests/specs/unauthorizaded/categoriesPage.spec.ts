import {test, expect} from '../../fixtures/fixturesUnauthorizaded';

test('Проверка лейаута', async ({ categoriesPage}) => {
    await categoriesPage.contentPageHasCorrectLayout();
});