describe('SauceDemo Login Test', () => {

  it('should log in, wait for 5 seconds, and log out', () => {
    // Visit the website
    cy.visit('https://www.saucedemo.com/');

    // Wait for 5 seconds to simulate a pause after page load
    cy.wait(5000);

    // Enter username 'standard_user'
    cy.get('#user-name').type('standard_user');

    // Enter password 'secret_sauce'
    cy.get('#password').type('secret_sauce');

    // Click on the login button
    cy.get('#login-button').click();

    // Wait for 5 seconds after logging in
    cy.wait(5000);

    // Verify successful login by checking the presence of the inventory page
    cy.url().should('include', '/inventory.html');

    // Click on the menu button (top-left)
    cy.get('#react-burger-menu-btn').click();

    // Wait for 5 seconds after opening the menu
    cy.wait(5000);

    // Click on the logout button
    cy.get('#logout_sidebar_link').click();

    // Verify that we are back on the login page
    cy.url().should('include', '/');
  });

});
