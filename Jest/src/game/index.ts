export const playFlipCoin = () => {
  if (Math.random() > 0.5) {
    return "Winner!";
  }
  return "Lose!!!";
};
