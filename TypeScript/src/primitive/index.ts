// String
const username = "John Doe";
const greet = `Hi ${username}`;
console.log(greet);

// Number Int and Float
const age: number = 27;
const height: number = 172.5;

console.log(
  `Hello I'm ${username}, I'm ${age} years old and my height ${height} cm`
);

// Boolean
const isAdmin: boolean = true;

console.log(isAdmin);

// Null & Undefined
const numberPhone: null = null;
const address: undefined = undefined;

console.log(numberPhone);
console.log(address);

// Symbol
const id1: symbol = Symbol("id");
const id2: symbol = Symbol("id");
const id3: symbol = Symbol("jp");

console.log(id1 === id2); // false, must be unique
console.log(id1 !== id3); // true, bcs not same

// bigInt
const biggest: bigint = 123456789012345678901234567890n;

console.log(biggest);
