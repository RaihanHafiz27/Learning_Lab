import { isValidScore } from "../../src/validateScore";

describe("isValidScore", () => {
  // Test Case 1 : Checking the lower bound
  it("Should be false for scores less than 0", () => {
    expect(isValidScore(-1)).toBe(false);
  });

  // Test Case 2 : Checking the upper bound
  it("Should be false for scores greater than 999", () => {
    expect(isValidScore(1000)).toBe(false);
  });

  // Test Case 3 : Checking the lower boundary condition
  it("Should be true for a score of 0", () => {
    const score = 0;
    expect(score).toBeGreaterThanOrEqual(0);
  });

  // Test Case 4 : Checking a valid score in the middle
  it("Should be true for a score beetwen 0 and 999", () => {
    const score = 500;
    expect(isValidScore(score)).toBe(true);
    expect(score).toBeGreaterThan(0);
    expect(score).toBeLessThan(999);
  });

  // Test Case 5 : Checking the upper boundary condition
  it("Should be true for a score of exactly 999", () => {
    const score = 999;
    expect(isValidScore(score)).toBe(true);
    expect(score).toBeLessThanOrEqual(999);
  });
});
