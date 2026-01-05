describe("negation", () => {
  it("should be negated", () => {
    // expect(2).toBe(5); // FAIL
    expect(2).not.toBe(5); // PASS

    // expect([1, 2, 3]).toContain(4); // FAIL
    expect([1, 2, 3]).not.toContain(4); // PASS
  });
});

// more advanced examples Negation (.not) in registerTest
