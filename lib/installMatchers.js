const toBeExist = require('./matchers/toBeExist');
const toBeA = require('./matchers/toBeA');
const toBeRequired = require('./matchers/toBeRequired');
const toBeUnique = require('./matchers/toBeUnique');
const toBeIndexed = require('./matchers/toBeIndexed');
const toBeTrimmed = require('./matchers/toBeTrimmed');
const toMatch = require('./matchers/toMatch');
const toHaveAMinValue = require('./matchers/toHaveAMinValue');
const toHaveAMaxValue = require('./matchers/toHaveAMaxValue');
const toHaveAMinLength = require('./matchers/toHaveAMinLength');
const toHaveAMaxLength = require('./matchers/toHaveAMaxLength');

module.exports = (expect) => {
  expect.extend({
    toBeExist,
    toBeA,
    toBeRequired,
    toBeUnique,
    toBeIndexed,
    toBeTrimmed,
    toMatch,
    toHaveAMinValue,
    toHaveAMaxValue,
    toHaveAMinLength,
    toHaveAMaxLength
  });
  return expect;
};
