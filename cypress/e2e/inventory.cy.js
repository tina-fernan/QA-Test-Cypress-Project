import LoginPage from '../support/pageObjects/LoginPage'
import InventoryPage from '../support/pageObjects/InventoryPage'

describe('Inventory Tests', () => {

  it('TC_003 — Add item to cart', () => {
    cy.fixture('users').then(user => {
      LoginPage.visit()
      LoginPage.enterUsername(user.validUser.username)
      LoginPage.enterPassword(user.validUser.password)
      LoginPage.clickLogin()

      InventoryPage.addFirstItemToCart()
      InventoryPage.goToCart()

      cy.url().should('include', '/cart')
    })
  })
})