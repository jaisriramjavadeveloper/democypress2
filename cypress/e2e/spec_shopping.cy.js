import { loginPage } from '../support/pages/loginPage';
import { dashboardPage } from '../support/pages/dashboardPage';
import { cartPage } from '../support/pages/CartPage';
import { checkoutPage } from '../support/pages/checkoutPage';

describe('Login, Select Item, Checkout, and Finish', () => {
  const users = Cypress.env('users');  // Get users from config
  const password = Cypress.env('password');  // Get password from config
  const firstUser = users.standard_user;  // Use first user
  const itemName = 'Sauce Labs Backpack';  // Example item

  before(() => {
    cy.log('Using first user:', firstUser);
  });

  it('should log in, select an item, add to cart, and finish checkout', () => {
    // Login Page Actions
    loginPage.visit();
    loginPage.enterUsername(firstUser);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    loginPage.verifyLoggedIn();
    // Wait for the inventory items to load
  cy.wait(2000); // Wait for 2 seconds

    // Dashboard (Inventory) Actions
    dashboardPage.selectItem(itemName);
    dashboardPage.goToCart();

    // Cart Page Actions
    cartPage.verifyCartPage();
    cartPage.checkout();

    // Checkout Page Actions
    checkoutPage.enterCheckoutInfo('John', 'Doe', '12345');  // Fill checkout info
    checkoutPage.finishCheckout();
    checkoutPage.verifyCheckoutComplete();  // Verify successful checkout
  });
});
