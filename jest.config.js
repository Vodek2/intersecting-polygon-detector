/* eslint-disable quote-props */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  "clearMocks": true,
  "coverageDirectory": "coverage",

  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/test/"

  ],
  // The test environment that will be used for testing
  "testEnvironment": "node",
  // Indicates whether each individual test should be reported during the run
  "verbose": true
};
