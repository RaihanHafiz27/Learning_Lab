export const calculatePrice = (itemPrices: number[], taxRate: number) => {
  const subTotal = itemPrices.reduce(
    (sum, currentPrice) => sum + currentPrice,
    0
  );
  const finalTotal = subTotal * (1 + taxRate);
  return finalTotal;
};
