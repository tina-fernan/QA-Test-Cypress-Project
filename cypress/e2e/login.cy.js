import LoginPage from '../support/pageObjects/LoginPage'

describe('Login Tests', () => {

  it('TC_001 - Valid Login', () => {
    cy.fixture('users').then(user => {
      cy.login(user.validUser.username, user.validUser.password)
      cy.url().should('include', '/inventory')
    })
  })

  it('TC_002 - Invalid Login', () => {
    LoginPage.visit()
    LoginPage.enterUsername('wrong')
    LoginPage.enterPassword('wrong')
    LoginPage.clickLogin()

    LoginPage.getErrorMessage().should('be.visible')
  })

})