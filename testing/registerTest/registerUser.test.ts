import { inputUser } from "../../src/register/registerUser";

describe("inputUser", () => {
  it("Should throw an error invalid input", () => {
    expect(() => inputUser(null)).toThrow("Name is required");
    expect(() => inputUser("")).toThrow("Name is required");

    expect(inputUser("John")).toBe("Hello John");
  });
});
