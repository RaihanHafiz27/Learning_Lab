// without generics (use any)
const testing = (arg: any): any => {
  return arg;
};

let a = testing(5); // number -> but TS doesn't know
let b = testing("Hello"); // string -> but TS also doesn't know

console.log(a);
console.log(b.toUpperCase());

// with generics
function identity<T>(arg: T) {
  return arg;
}

let c = identity<number>(10); // T = number
let d = identity<string>("World"); // T = string
// let e = identity<boolean>("World"); // Error

console.log(c);
console.log(d.toUpperCase());

// generics arrow function
const wrapArray = <T>(item: T): T[] => {
  return [item];
};

console.log(wrapArray(15));
console.log(wrapArray("John"));

// generics array
const getFirst = <T>(arr: T[]): T | undefined => {
  return arr[0];
};

let numbers = getFirst([10, 20, 30]); // T = number
let names = getFirst(["Anto", "Budi", "Andi"]); // T = string

console.log(numbers);
console.log(names);

// generics with interface
interface ApiResponse<T> {
  data: T;
  status: number;
}

const res: ApiResponse<{ name: string; age: number }> = {
  data: {
    name: "John Doe",
    age: 22,
  },
  status: 200,
};

console.log(res);
console.log(res.data);
console.log(res.status);

// A few generics
interface KeyValue<K, V> {
  key: K;
  value: V;
}

const stringToNumber: KeyValue<string, number> = {
  key: "age",
  value: 22,
};

const numberToBoolean: KeyValue<number, boolean> = {
  key: 12,
  value: true,
};

console.log(stringToNumber);
console.log(numberToBoolean);

// generics with constraint
const logLength = <T extends { length: number }>(item: T) => {
  console.log(item.length);
};

logLength("Hellow");
logLength([1, 2, 3, 4, 5]);
// logLength(100)  // Error bcs number doesn't have length

// Default Types on Generics
const user = <T = string>(value: T) => {
  return value;
};

console.log(user<number>(123));
console.log(user("Hola"));

// Multiple Type Parameters
const pair = <K, V>(key: K, value: V): [K, V] => {
  return [key, value];
};

console.log(pair<string, number>("Hello", 27));
console.log(pair<number, boolean>(2005, false));

// OR like this
const mergeObj = <T, U>(param1: T, param2: U): T & U => {
  return { ...param1, ...param2 };
};

console.log(mergeObj({ name: "John Doe" }, { isOnline: true }));
console.log(mergeObj({ age: 12 }, { address: "abc123" }));
