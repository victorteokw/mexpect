
const { user } = require('mexpect/');

describe("User", () => {

  describe("name", () => {

    it("exists", () => {
      expect(user.name).toBeExist();
    });

    it("is a string", () => {
      expect(user.name).toBeA(String);
    });

    it("is required", () => {
      expect(user.name).toBeRequired();
    });

  });

});

expect(user.name).toBeExist();
expect(user.age).toMatch(/sdfsdfsdf/);
expect(user.name).toBeUnique();

expect(user.settings.iphone).toBeA(String);
