import { calculatePrice } from "../../src/totalPriceCart";

describe("calculate price", () => {
  it("Should return the correct total including tax", () => {
    const itemPrices = [19.99, 4.5, 12.0];
    const taxRate = 0.075;

    const finalTotal = calculatePrice(itemPrices, taxRate);

    expect(finalTotal).toBeCloseTo(39.22675);
  });
});
