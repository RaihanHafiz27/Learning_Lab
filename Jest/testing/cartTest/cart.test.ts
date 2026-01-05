// Before and After Each
let cart: string[];

describe("cart test", () => {
  // this code will run before it blok.
  beforeEach(() => {
    console.log("Running beforeEach : Resetting cart...");
    cart = [];
  });

  // this code will run after it blok.
  afterEach(() => {
    console.log("Running afterEach : Cleaning up cart...");
    cart = [];
  });

  // ===== TEST =====
  it("Should add an item to the cart", () => {
    console.log("Running Test 1...");
    const product = "Xiaomi 17 Pro Max";
    cart.push(product);
    expect(cart).toContain(product);
    expect(cart).toHaveLength(1);
    console.log(cart);
  });

  it("Should be empty on initialization (thanks to before each)", () => {
    console.log("Running Test 2...");
    expect(cart).toHaveLength(0);
  });
});
