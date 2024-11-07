import {test} from '../support/BaseTest'


test.describe('Home page tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await test.step('Navigate to Homepage', async () => {
      await homePage.goToHomePage()
    });
  });
 
  test('Navigate to get started page', async ({homePage, webActions}) =>{
    await test.step('Click on Get Started button', async () => {
      await webActions.clickButton(homePage.getStartedBtn)
    })
  })
})


