let person: [string, number];
person = ["John Doe", 27];
console.log(person);

// the sequence must be correct
// person = [27, "John Doe"]
// console.log(person);

// tuple with more than 2 elements
let product: [number, string, boolean];
product = [1, "Xiaomi", true];
console.log(product);

//  tuple in function return
const getUser = (): [number, string] => {
  return [27, "Hello World"];
};

console.log(getUser());

// optional tuple element
let point: [number, number?, number?];
point = [100, 200, 300];
console.log(point);

point = [100, 200];
console.log(point);

point = [100];
console.log(point);

// readonly tuple
let rgb: readonly [number, number, number] = [255, 0, 0];
// rgb[0] = 100 ERROR
