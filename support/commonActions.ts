import { Page, Locator, expect } from '@playwright/test';

export class CommonActions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickButton(locator: Locator, index: number = 0): Promise<void> {
        const element = locator.nth(index);
        await element.scrollIntoViewIfNeeded();
        await element.click();
    }
    
    async inputText(element: Locator, text: string): Promise<void> {
        await element.fill(text);
    }    

    async isVisible(element: Locator): Promise<boolean> {
        await expect(element).toBeVisible();
        return await element.isVisible();
    }    

    async getText(selector: string): Promise<string> {
        return await this.page.locator(selector).innerText();
    }

    async waitForElement(selector: string, timeout: number = 5000) {
        await this.page.locator(selector).waitFor({ timeout });
    }

    async hoverOverElement(element: Locator): Promise<void> {
        await element.hover();
    }

    async isTextVisible(locator: Locator, expectedText: string, index: number = 0, timeout: number = 5000): Promise<void> {
        const element = locator.nth(index);
        await element.waitFor({ state: 'visible', timeout });
        const actualText = await element.innerText();
        expect(actualText.trim()).toBe(expectedText.trim());
    }
    
    /**
     * Validates the current URL.
     * @param expectedUrl The expected URL or a part of the URL.
     * @param matchType The type of match: 'exact' or 'contains'
     */

    async validateUrl(expectedUrl: string, matchType: 'exact' | 'contains' ) {
        const currentUrl = this.page.url();

        switch (matchType) {
            case 'exact':
                expect(currentUrl).toBe(expectedUrl);
                break;

            case 'contains':
                expect(currentUrl).toContain(expectedUrl);
                break;

            default:
                throw new Error(`Invalid match type: ${matchType}`);
        }
    }
    
}
