// Import the loginPage object from the POM file
import { loginPage } from '../support/pages/loginPageAll';

describe('Login and Logout for different users', () => {
  const users = Cypress.env('users');  // Access users from config
  const password = Cypress.env('password');  // Access password from config

  before(() => {
    // Log users and password to verify if the variables are loaded correctly
    cy.log('Users:', JSON.stringify(users));
    cy.log('Password:', password);
  });

  beforeEach(() => {
    loginPage.visit();  // Visit the base URL defined in cypress.config.js
  });

  // Iterate over each user in the config
  Object.keys(users).forEach(userKey => {
    const username = users[userKey];

    it(`should log in and log out for user: ${username}`, () => {
      loginPage.enterUsername(username);   // Enter username
      loginPage.enterPassword(password);   // Enter password
      loginPage.clickLogin();              // Click login button

      // Verify that the user successfully logged in
      loginPage.verifyLoggedIn();

      // Wait for 5 seconds (simulated pause)
      cy.wait(5000);

      // Logout the user
      loginPage.logout();

      // Verify that the user successfully logged out
      loginPage.verifyLoggedOut();
    });
  });
});
 