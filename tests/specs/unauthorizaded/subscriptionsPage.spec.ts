import {test, expect} from '../../fixtures/fixturesUnauthorizaded';


test('Проверка доступности элементов хедоров неавторизованного пользователя', async ({ subscriptionsPage }) => {
    await subscriptionsPage.contentHasAriaSnapshot();
});