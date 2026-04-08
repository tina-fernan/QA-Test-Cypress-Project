// import LoginPage from '../support/pageObjects/LoginPage'
import InventoryPage from '../support/pageObjects/InventoryPage'
import CheckoutPage from '../support/pageObjects/CheckoutPage'

describe('Checkout Tests', () => {

  beforeEach(() => {
  cy.fixture('users').then(user => {
    cy.login(user.validUser.username, user.validUser.password)
  })
})

  it('TC_004 - Complete checkout successfully', () => {

  cy.login('standard_user', 'secret_sauce')

  cy.get('.inventory_item button').first().click()
  cy.get('.shopping_cart_link').click()

  cy.get('[data-test="checkout"]').click()

  cy.get('[data-test="firstName"]').type('John')
  cy.get('[data-test="lastName"]').type('Doe')
  cy.get('[data-test="postalCode"]').type('12345')

  cy.get('[data-test="continue"]').click()

  cy.url().should('include', 'checkout-step-two')

  cy.get('[data-test="finish"]').click()

  cy.get('.complete-header').should('contain', 'Thank you')
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