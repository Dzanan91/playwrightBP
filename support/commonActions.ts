import { Page, Locator } from '@playwright/test';

export class CommonActions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickButton(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
        await locator.click();
    }

    async inputText(selector: string, text: string) {
        await this.page.locator(selector).fill(text);
    }

    async isVisible(selector: string): Promise<boolean> {
        return await this.page.locator(selector).isVisible();
    }

    async getText(selector: string): Promise<string> {
        return await this.page.locator(selector).innerText();
    }

    async waitForElement(selector: string, timeout: number = 5000) {
        await this.page.locator(selector).waitFor({ timeout });
    }
}
