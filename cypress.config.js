const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      
      const environment = config.env.ENVIRONMENT || 'pdn';

      const envConfig = {
        dev: "https://www.saucedemo.com/",
        qa: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login",
        pdn: "https://teststore.automationtesting.co.uk/index.php"
      }
      config.baseUrl = envConfig[environment];
      return config;
    },
  },
});
