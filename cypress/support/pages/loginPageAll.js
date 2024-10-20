class LoginPageAll {
  visit() {
    cy.visit('/');
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

  logout() {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
  }

  verifyLoggedIn() {
    cy.url().should('include', '/inventory.html');
  }

  verifyLoggedOut() {
    cy.url().should('include', '/');
  }
}

// Export the loginPage object for use in the test
export const loginPageAll = new LoginPageAll();
