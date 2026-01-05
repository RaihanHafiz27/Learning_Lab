describe("function check length", () => {
  it("should check length from array", () => {
    const data1 = [1, 2, 3];

    // failure
    // expect(data1.length).toBe(2);
    // expect(data1).toHaveLength(2); // but this is recommendation for use

    // correct
    // expect(data1.length).toBe(3);
    expect(data1).toHaveLength(3);
  });
  it("should check length from string", () => {
    const data2 = "Hello";

    // expect(data2.length).toBe(5);
    expect(data2).toHaveLength(5);
  });
});
