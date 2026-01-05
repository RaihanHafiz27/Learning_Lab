import { fetchUser } from "../../src/asyncPromise/data";

// solution 1 return the Promise
describe("promise with return", () => {
  it("should fetch the user (using return)", () => {
    return fetchUser(1).then((data) => {
      expect(data.name).toBe("John");
    });
  });

  it("should reject for an invalid user (using return)", () => {
    expect.assertions(1);

    return fetchUser(99).catch((error) => {
      expect(error.message).toMatch(/not found/i);
    });
  });
});

// solution 2 async await
describe("promise with async", () => {
  it("should fetch the user (using async/await)", async () => {
    const user = await fetchUser(1);
    expect(user.name).toBe("John");
  });

  it("should reject for an invalid user (using async/await)", async () => {
    expect.assertions(1);
    try {
      await fetchUser(99);
    } catch (error: any) {
      expect(error.message).toMatch(/not found/i);
    }
  });
});

// solution 3 The resolve and rejects matcher from jest
describe("promise with jest matcher", () => {
  it("should fetch the user (using .resolve)", () => {
    return expect(fetchUser(1)).resolves.toHaveProperty("name", "John");
  });

  it("should reject for an invalid user (using .resolve)", () => {
    return expect(fetchUser(99)).rejects.toThrow("user not found");
  });
});
