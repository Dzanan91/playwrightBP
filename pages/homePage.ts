import { Page,BrowserContext, Locator, } from "@playwright/test";

export class HomePage {
    readonly page:Page
    readonly context: BrowserContext;

    readonly getStartedBtn: Locator
    readonly GRSLogo: Locator
    readonly navbar: { [key: string]: Locator };
    
    constructor(page:Page, context: BrowserContext) {
        this.page = page
        this.context = context

        this.getStartedBtn = page.getByRole('link', {name: 'Get started'})
        this.GRSLogo = page.locator('a[href="https://giantrocketship.com"]')
        this.navbar = {
            Home: this.page.getByRole('link', { name: 'Home', exact: true }),
            Pricing: this.page.getByRole('link', { name: 'Pricing', exact: true }),
            Resources: this.page.getByRole('link', { name: 'Resources', exact: true }),
            Contact: this.page.locator('a[aria-haspopup="true"]:has-text("Contact")'),
            ScheduleDemo: this.page.getByRole('link', { name: 'Schedule Demo', exact: true }),
            ContactUs: this.page.getByRole('link', {name: 'Contact Us', exact: true})
        };
    }


    async goToHomePage(): Promise<void> {
        await this.page.goto('/')
    }

}