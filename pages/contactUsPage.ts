import { Page,BrowserContext, Locator, FrameLocator, } from "@playwright/test";

export class ContactUsPage {
    readonly page:Page
    readonly context: BrowserContext;

    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly emailInput: Locator
    readonly commentSection: Locator
    readonly submitBtn: Locator
    readonly nameErrorMessage: Locator
    readonly emailErrorMessage: Locator
    readonly commentErrorMessage: Locator
    readonly widgetElement: Locator
    readonly youTubeElement: Locator
    readonly iframe: FrameLocator;
    
    
    constructor(page:Page, context: BrowserContext) {
        this.page = page
        this.context = context

        this.iframe = page.frameLocator('iframe[src="https://forms.zohopublic.com/giantrocketship/form/ContactUs/formperma/2GK_UjFMD9mHGNOwqNGNR4-lMvKrCQeBVRGu4FTSuY4?zf_rszfm=1&gclid=undefined"]');

        this.firstNameInput = this.iframe.locator('input[elname="First"]');
        this.lastNameInput = this.iframe.locator('input[elname="Last"]');
        this.emailInput = this.iframe.locator('input[name="Email"]');
        this.commentSection = this.iframe.locator('textarea[id="MultiLine-arialabel"]');
        this.submitBtn = this.iframe.locator('button[elname="submit"]')
        this.nameErrorMessage = this.iframe.locator('#error-Name')
        this.emailErrorMessage = this.iframe.locator('#error-Email')
        this.commentErrorMessage = this.iframe.locator('#error-MultiLine')
        this.widgetElement = this.page.locator('div[data-widget_type="text-editor.default"] p')
        this.youTubeElement = this.page.locator('div[data-settings*="youtube_url"]')
    }

}