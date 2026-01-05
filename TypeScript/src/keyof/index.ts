// Basic keyof
type Person = {
  name: string;
  age: number;
  isOnline: boolean;
};

type PersonKeys = keyof Person;

let key: PersonKeys;

key = "name";
key = "age";
key = "isOnline";
// key = "address" // Error

// keyof + index access
type Car = {
  brand: string;
  year: number;
  isElectric: boolean;
};

const getCarProperty = (car: Car, key: keyof Car) => {
  return car[key];
};

const myCar: Car = { brand: "Toyota", year: 2018, isElectric: false };

console.log(getCarProperty(myCar, "brand"));
console.log(getCarProperty(myCar, "isElectric"));

// keyof with generics
const getValue = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const student = { name: "John Doe", score: 90 };

const val1 = getValue(student, "name");
const val2 = getValue(student, "score");
// const val3 = getValue(student, "age")

console.log(val1);
console.log(val2);
