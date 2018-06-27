const toBeExist = function(fd) {

};

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
