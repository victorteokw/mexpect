const { expect, User } = require('mexpect');

describe("User", () => {

  describe("name", () => {

    it("exists", () => {
      expect(User.name).toBeExist();
    });

    it("is a string", () => {
      expect(User.name).toBeA(String);
    });

    it("is required", () => {
      expect(User.name).toBeRequired();
    });

  });

});

expect(User.name).toBeExist();
expect(User.age).toMatch(/sdfsdfsdf/);
expect(User.name).toBeUnique();

expect(User.settings.iphone).toBeA(String);
