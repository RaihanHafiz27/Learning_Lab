import { initConfig } from "../../src/config/initConfig";

describe("initConfig", () => {
  it("should create a config with a nested user ID", () => {
    const config = initConfig("John Doe");

    // This is the exact pattern from your example!
    // we check that the path "user.name" exists AND has value "John Doe"
    expect(config).toHaveProperty("data.user.name", "John Doe");
  });

  it("should set a default theme property", () => {
    const config = initConfig("Alex");

    // we can also just check for the *existence* of a property
    expect(config).toHaveProperty("data.theme");

    // Or we can check its default value
    expect(config).toHaveProperty("data.theme", "dark");
  });

  it("should match the expected user and theme, ignoring other properties", () => {
    const config = initConfig("Nuha");

    const expectedProperties = {
      data: {
        theme: "dark",
        user: {
          name: "Nuha",
        },
      },
    };

    // This test will PASS, even though `config` also has
    // `featureFlags` and `user.lastLogin`.
    // .toMatchObject() only cares that what we provided *is* there.
    expect(config).toMatchObject(expectedProperties);

    // For comparison, this would FAIL:
    // expect(config).toEqual(expectedProperties);
    // ...because .toEqual() sees the extra keys and fails.
  });
});
