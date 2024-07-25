const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      
      const environment = config.env.ENVIRONMENT || 'qa';

      const envConfig = {
        dev: "https://www.google.com",
        qa: "https://www.saucedemo.com/",
        pdn: "https://www.google.com.es"
      }
      config.baseUrl = envConfig[environment];
      return config;
    },
  },
});
