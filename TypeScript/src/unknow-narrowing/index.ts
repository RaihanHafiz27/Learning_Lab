// UNKNOW vs ANY
let valueAny: any = "Hello TypeScript";
// let valueAny: any = 12;
let valueUnknow: unknown = "Hello TypeScript";
// let valueUnknow: unknown = 12;

// any : can be used immediately (but dangerous)
console.log(valueAny.toUpperCase()); // if the data is not a string , runtime will encounter an error

// unknow : must be checked
if (typeof valueUnknow === "string") {
  console.log(valueUnknow.toUpperCase());
} else if (typeof valueUnknow === "number") {
  console.log(valueUnknow * 2);
}

// NARROWING IN UNION TYPE
const printId = (id: string | number) => {
  if (typeof id === "string") {
    console.log(`String ID : ${id.toUpperCase()}`);
  } else {
    console.log(`Number ID : ${id * 2}`);
  }
};

printId("abc");
printId(123);

// don't use "unknow" without narrowing
let data: unknown = "Hello World";
// console.log(data.toUpperCase()); // Error
