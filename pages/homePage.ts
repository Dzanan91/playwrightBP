import { Page,BrowserContext, Locator, } from "@playwright/test";

export class HomePage {
    readonly page:Page
    readonly context: BrowserContext;

    readonly getStartedBtn: Locator
    
    constructor(page:Page, context: BrowserContext) {
        this.page = page
        this.context = context

        this.getStartedBtn = page.getByRole('link', {name: 'Get started'})
    }


    async goToHomePage(): Promise<void> {
        await this.page.goto('/')
    }
}