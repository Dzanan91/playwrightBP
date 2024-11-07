import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/homePage'; 
import { CommonActions } from './commonActions'; 

const test = baseTest.extend<{
    homePage: HomePage;
    webActions: CommonActions;
}>({
    homePage: async ({ page,context }, use) => {
        await use(new HomePage(page, context));
    },
    webActions: async ({ page }, use) => {
        await use(new CommonActions(page));
    },
});

export { test };
