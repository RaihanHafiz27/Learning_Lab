// Basic Object
let person: { name: string; age: number } = {
  name: "John Doe",
  age: 20,
};

console.log(person);

// Adding wrong property can error
// person ={
//   name : "Alex",
//   age : "Twenty" // must be a number
// }

//  Optional Property
let car: { brand: string; year?: number } = {
  brand: "Toyota",
};

console.log(car);

car.year = 1995;
console.log(car);

// Nexted Object
let student: {
  name: string;
  age: number;
  address: { street: string; no: number };
} = {
  name: "Alexa",
  age: 17,
  address: {
    street: "Eidenburg",
    no: 29,
  },
};

console.log(student);
