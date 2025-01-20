import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
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
