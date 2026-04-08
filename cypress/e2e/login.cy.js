import LoginPage from '../support/pageObjects/LoginPage'

describe('Login Tests', () => {

  it('TC_001 - Login with valid credentials', () => {
    cy.fixture('users').then(user => {
    cy.login(user.validUser.username, user.validUser.password)

    cy.url().should('include', '/inventory')
    cy.get('.inventory_list').should('be.visible')
      
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