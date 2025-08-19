import {test, expect} from '../../fixtures/fixturesAuthorizaded';


test('Проверка доступности элементов хедоров авторизованного пользователя', async ({ subscriptionsPage }) => {
    await subscriptionsPage.contentHasAriaSnapshot();
});