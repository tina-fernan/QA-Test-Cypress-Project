class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  enterUsername(username) {
    cy.get('#user-name').clear().type(username)
  }

  enterPassword(password) {
    cy.get('#password').clear().type(password)
  }

  clickLogin() {
    cy.get('#login-button').click()
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]')
  }
}

export default new LoginPage()