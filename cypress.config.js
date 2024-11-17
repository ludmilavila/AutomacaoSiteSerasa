const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: 'https://www.serasa.com.br/credito/',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

