import { fakeUser, fetchUser } from "../../src/fetchUser";

describe("function fetch data user", () => {
  it("should return user object if ID exists", () => {
    const user = fetchUser(27);
    expect(user).toBeDefined();
    expect(user).toEqual(fakeUser);
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("age");
  });
  it("should return null if id invalid", () => {
    expect(fetchUser(1)).toBeNull();
  });
  it("should return undefined if user not found", () => {
    expect(fetchUser(99)).toBeUndefined();
  });
});
