import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/homePage'; 
import { CommonActions } from './commonActions'; 
import { ContactUsPage } from '../pages/contactUsPage';

const test = baseTest.extend<{
    homePage: HomePage;
    webActions: CommonActions;
    contactUsPage: ContactUsPage
}>({
    homePage: async ({ page,context }, use) => {
        await use(new HomePage(page, context));
    },
    contactUsPage: async ({ page,context }, use) => {
        await use(new ContactUsPage(page, context));
    },
    webActions: async ({ page }, use) => {
        await use(new CommonActions(page));
    },
});

export { test };
