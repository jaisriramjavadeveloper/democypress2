class BuyUserPage {
    visit() {
      cy.visit('/');  // Visit the base URL
    }
  
    enterUsername(username) {
      cy.get('#user-name').type(username);
    }
  
    enterPassword(password) {
      cy.get('#password').type(password);
    }
  
    clickLogin() {
      cy.get('#login-button').click();
    }
  
    verifyLoggedIn() {
      cy.url().should('include', '/inventory.html');
    }
  }
  
  export const buyUserPage = new BuyUserPage();
  