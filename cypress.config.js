const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config)
      return config
    },

    baseUrl: 'https://www.saucedemo.com',

    env: {
      username: process.env.CYPRESS_username,
      password: process.env.CYPRESS_password,
      allure: true
    },

    screenshotOnRunFailure: true,
    allowCypressEnv: true,

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  }
})