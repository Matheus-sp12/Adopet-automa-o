const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ua8wcz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "./cypress/support/e2e.js", // 👈 diferença aqui
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // mantém igual
    experimentalStudio: true,

  },
});
