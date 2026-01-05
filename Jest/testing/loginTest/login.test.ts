import { isLogin } from "../../src/isLogin";

describe("function validation password", () => {
  // case 1 : valid credentials
  it("should be truthy when username and password are not empty", () => {
    expect(isLogin("john", "qwerty123")).toBeTruthy();
  });
  // case 2 : Empty username
  it("should be falsy if the username is an empty string", () => {
    expect(isLogin("", "qwerty123")).toBeFalsy();
  });
  // case 3 : Null password
  it("should be falsy if the password is null", () => {
    expect(isLogin("Alex", null)).toBeFalsy();
  });
  // case 4 : Undefined username
  it("should be falsy if the username is undefined", () => {
    expect(isLogin(undefined, "qwert123")).toBeFalsy();
  });
});
