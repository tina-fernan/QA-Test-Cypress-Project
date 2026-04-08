import LoginPage from '../support/pageObjects/LoginPage'
import InventoryPage from '../support/pageObjects/InventoryPage'
import CheckoutPage from '../support/pageObjects/CheckoutPage'

describe('Checkout Tests', () => {

  beforeEach(() => {
    cy.fixture('users').then(user => {
      LoginPage.visit()
      LoginPage.enterUsername(user.validUser.username)
      LoginPage.enterPassword(user.validUser.password)
      LoginPage.clickLogin()

      cy.url().should('include', '/inventory')
    })
  })

  it('TC_004 - Complete checkout successfully', () => {
    InventoryPage.addFirstItemToCart()
    InventoryPage.goToCart()

    CheckoutPage.clickCheckout()
    CheckoutPage.fillInformation('John', 'Doe', '12345')
    CheckoutPage.continue()
    CheckoutPage.finish()

    CheckoutPage.successMessage().should('contain', 'Thank you')
  })

  it('TC_005 - Checkout should fail with empty fields', () => {
    InventoryPage.addFirstItemToCart()
    InventoryPage.goToCart()

    CheckoutPage.clickCheckout()

    // Do NOT fill form
    CheckoutPage.continue()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Error')
  })

})