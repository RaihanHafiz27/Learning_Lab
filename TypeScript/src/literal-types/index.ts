// literal string type
type CoffeSize = "small" | "medium" | "large";

const orderCoffe = (size: CoffeSize) => {
  console.log(`You ordered a ${size} coffe`);
};

orderCoffe("small");
orderCoffe("medium");
orderCoffe("large");
// orderCoffe("gigantic") Error

// literal number type
let diceRoll: 1 | 2 | 3 | 4 | 5;
diceRoll = 4;
// diceRoll = 7 Error

console.log(diceRoll);

// literal boolean type
let isOnline: true;
isOnline = true;
// isOnline =false // Error

console.log(isOnline);
