const { defineConfig } = require("cypress");

export default defineConfig({
  e2e: {
  baseUrl: 'https://globalsqa.com/angularJs-protractor/BankingProject/#/login',
  reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: true,
      timestamp: 'YYYYMMDDHHmmss',
      charts: true,
      reportPageTitle: 'Cypress Test Report',
    },
  },
});
