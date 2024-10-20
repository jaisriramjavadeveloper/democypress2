class CheckoutPage {
    enterCheckoutInfo(firstName, lastName, postalCode) {
      cy.get('#first-name').type(firstName);
      cy.get('#last-name').type(lastName);
      cy.get('#postal-code').type(postalCode);
      cy.get('#continue').click();  // Proceed to the next step
    }
  
    finishCheckout() {
      cy.get('#finish').click();  // Finish the checkout process
    }
  
    verifyCheckoutComplete() {
      // Wait for the complete header to appear and check the text
      cy.get('.complete-header', { timeout: 10000 })  // Increase the timeout
        .should('contain', 'THANK YOU FOR YOUR ORDER');  // Verify success message
    }
  }
  
  export const checkoutPage = new CheckoutPage();
  