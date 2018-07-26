module.exports = {
  verbose: true,
  collectCoverage: true,
  "coverageThreshold": {
    // "global": {
    //   "branches": 50,
    //   "functions": 50,
    //   "lines": 50,
    //   "statements": 50
    // },
    // "./src/components/**/*.js": {
    //   "branches": 40,
    //   "statements": 40
    // },
    // "./src/api/very-important-module.js": {
    //   "branches": 100,
    //   "functions": 100,
    //   "lines": 100,
    //   "statements": 100
    // }
  },
  // testPathIgnorePatterns:["<rootDir>/_test_/*"]
  testRegex:"(/_test_/.*|(\\.|/)(test|spec))\\.jsx?$"
};