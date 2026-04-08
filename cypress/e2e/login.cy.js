import LoginPage from '../support/pageObjects/LoginPage'

describe('Login Tests', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('TC_001 - Login with valid credentials', () => {
    cy.fixture('users').then(user => {
      LoginPage.enterUsername(user.validUser.username)
      LoginPage.enterPassword(user.validUser.password)
      LoginPage.clickLogin()

      cy.url().should('include', '/inventory')
    })
  })

  it('TC_002 — Login with invalid credentials', () => {
    cy.fixture('users').then(user => {
      LoginPage.enterUsername(user.invalidUser.username)
      LoginPage.enterPassword(user.invalidUser.password)
      LoginPage.clickLogin()

      LoginPage.getErrorMessage().should('be.visible')
    })
  })
})