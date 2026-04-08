import LoginPage from '../support/pageObjects/LoginPage'
import InventoryPage from '../support/pageObjects/InventoryPage'
import CheckoutPage from '../support/pageObjects/CheckoutPage'

describe('Checkout Tests', () => {

  it('Complete checkout successfully', () => {
    cy.fixture('users').then(user => {
      LoginPage.visit()
      LoginPage.enterUsername(user.validUser.username)
      LoginPage.enterPassword(user.validUser.password)
      LoginPage.clickLogin()

      InventoryPage.addFirstItemToCart()
      InventoryPage.goToCart()

      CheckoutPage.clickCheckout()
      CheckoutPage.fillInformation('John', 'Doe', '12345')
      CheckoutPage.continue()
      CheckoutPage.finish()

      CheckoutPage.successMessage().should('contain', 'Thank you')
    })
  })
})