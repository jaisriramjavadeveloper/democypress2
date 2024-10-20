const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // You can implement node event listeners here
    },
  },
  env: {
    users: {
      standard_user: 'standard_user',
      locked_out_user: 'locked_out_user',
      problem_user: 'problem_user',
      performance_glitch_user: 'performance_glitch_user',
      error_user: 'error_user',
      visual_user: 'visual_user'
    },
    password: 'secret_sauce'
  }
});
