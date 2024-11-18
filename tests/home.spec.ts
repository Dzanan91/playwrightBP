import {test} from '../support/BaseTest'
import { generateRandomString } from '../support/utils/randomUtils'


test.describe('Home page tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await test.step('Navigate to Homepage', async () => {
      await homePage.goToHomePage()
    });
  });
 
  test('Validate Contact Us form', async ({ homePage, webActions, baseURL, contactUsPage }) =>{
    await test.step('Validate URL is correct', async () => {
      await webActions.validateUrl(`${baseURL}/`, 'exact')
    })
    await test.step('Validate logo is correct and visible', async () => {
      await webActions.isVisible(homePage.GRSLogo)
    })
    await test.step('Open Contact Us form', async () => {
      await webActions.clickButton(homePage.navbar.Contact)
      await webActions.clickButton(homePage.navbar.ContactUs)
    })
    await test.step('Validate error message when filling only name', async () => {
      await webActions.inputText(contactUsPage.firstNameInput, generateRandomString(5) + 'First')
      await webActions.inputText(contactUsPage.lastNameInput, generateRandomString(5) + 'Last')
      await webActions.clickButton(contactUsPage.submitBtn)
      await webActions.isTextVisible(contactUsPage.emailErrorMessage, 'Enter a value for this field.')
    })
    await test.step('Validate error message when filling only name and email', async () => {
      await webActions.inputText(contactUsPage.firstNameInput, generateRandomString(5) + 'First')
      await webActions.inputText(contactUsPage.lastNameInput, generateRandomString(5) + 'Last')
      await webActions.inputText(contactUsPage.emailInput, generateRandomString(10) + '@test.com')
      await webActions.clickButton(contactUsPage.submitBtn)
      await webActions.isTextVisible(contactUsPage.commentErrorMessage, 'Enter a value for this field.')
    })
    await test.step('Validate success message when filling Fill name, email and comment', async () => {
      await webActions.inputText(contactUsPage.firstNameInput, generateRandomString(5) + 'Last')
      await webActions.inputText(contactUsPage.lastNameInput, generateRandomString(5) + 'Last')
      await webActions.inputText(contactUsPage.emailInput, generateRandomString(10) + '@test.com')
      await webActions.inputText(contactUsPage.commentSection, generateRandomString(10) + 'Test comment')
      await webActions.clickButton(contactUsPage.submitBtn)
      await webActions.isVisible(contactUsPage.youTubeElement)
      await webActions.isTextVisible(contactUsPage.widgetElement, 'Your details have been submitted.')
    })
  })
})


