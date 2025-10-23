import { inputUser } from "../../src/register/registerUser";

describe("inputUser", () => {
  // Our "sad path" test from registerTest
  it("Should throw an error if the username is empty", () => {
    expect(() => inputUser("")).toThrow("Name is required");
    expect(() => inputUser(null)).toThrow("Name is required");
  });

  // Our New "happy path" test
  it("Should NOT throw an error if the username is valid", () => {
    // We expect that running this function with good data
    // Will not throw any error at all.
    expect(() => inputUser("John")).not.toThrow();

    expect(inputUser("John")).toBe("Hello John");
  });
});
