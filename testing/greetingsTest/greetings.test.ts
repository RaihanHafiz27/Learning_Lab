import { getGreetings } from "../../src/greetings/greetings";

describe("check the string", () => {
  it("should have the same string", () => {
    expect(`Hello World`).toContain("Hello"); // PASS
    // expect(`Hello World`).toContain("hello");  // FAIL

    expect(`Hello World`).toMatch("Hello"); // PASS
    // expect(`Hello World`).toMatch("hello");    // FAIL
    expect(`Hello World`).toMatch(/hello/i); // PASS
  });
});

describe("getGreeting", () => {
  const username = "Kanna";
  const greeting = getGreetings(username);

  it("should include the word 'Welcome', regardless of case", () => {
    expect(greeting).toMatch(/welcome/i);
  });

  it("should include the specific username", () => {
    expect(greeting).toMatch(username);
  });
});
