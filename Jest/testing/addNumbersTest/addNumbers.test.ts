import { addNumbers } from "../../src/first";

describe("func addNumbers", () => {
  it("should add two numbers", () => {
    expect(addNumbers(2, 1)).toBe(3);
  });
});
