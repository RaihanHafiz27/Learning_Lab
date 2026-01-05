// without function overload
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

let result1 = combine("Hello", "World");
let result2 = combine(20, 8);

console.log(result1);
console.log(result2);

// with function overload
function overload(a: string, b: string): string;
function overload(a: number, b: number): number;
function overload(a: number[], b: number[]): number[];

function overload(a: any, b: any) {
  if (typeof a === "string" && typeof b === "string") {
    return a + b; // merge string
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // calculate number
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b); // merge arrays
  }
  throw new Error("Type Invalid!!!");
}

let result3 = overload("John", "Doe");
let result4 = overload(12, 18);
let result5 = overload([1, 2, 3], [6, 7, 8]);

console.log(result3);
console.log(result4);
console.log(result5);

// let result6 = overload(true, true);
// console.log(result6);

// We cannot use function overlaod with arrow function
// const test = (a : string, b : string) : string
// const test = (a : number, b : number) : number

// but it can be overcome by using types or interface if we want to use arrow + overload
type TestOverload = {
  (a: string, b: string): string;
  (a: number, b: number): number;
};

const testing: TestOverload = (a: any, b: any) => {
  return a + b;
};

console.log(testing("Hello", "World"));
console.log(testing(20, 7));
