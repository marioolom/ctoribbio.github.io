exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*spec.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:8080/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
