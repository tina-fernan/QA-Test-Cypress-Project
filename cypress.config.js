const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.saucedemo.com',
     env: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      screenshotOnRunFailure: true,
      allowCypressEnv: false 
    }
  }
})