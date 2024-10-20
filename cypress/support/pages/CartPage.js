class CartPage {
    checkout() {
      cy.get('#checkout').click();  // Click the checkout button
    }
  
    verifyCartPage() {
      cy.url().should('include', '/cart.html');
    }
  }
  
  export const cartPage = new CartPage();
  