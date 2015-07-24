'use strict';

/**
 * config
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/e2e/googleHelloWorld.js'],
  capabilities: {
    browserName: 'chrome'
  }
};
