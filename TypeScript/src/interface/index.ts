// Basic Interface
interface User {
  name: string;
  phone: number;
  email: string;
}

const user: User = {
  name: "John Doe",
  phone: 1223344,
  email: "johndoe@gmail.com",
};

console.log(user);

// Optional Properties
interface Product {
  id: number;
  title: string;
  description?: string;
}

const product1: Product = {
  id: 1,
  title: "iPhone 17 Pro Max",
};

console.log(product1);

const product2: Product = {
  id: 2,
  title: "iPhone 17",
  description: "lorem ipsum dolor amet",
};

console.log(product2);

// Readonly Properties
interface Car {
  readonly vin: string;
  brand: string;
}

const car1: Car = { vin: "1234-XYZ", brand: "Toyota" };
// car1.vin = "5678-ASD"  will become an error
console.log(car1);

// Interface on function
interface MathOperation {
  (a: number, b: number): number;
}

const added: MathOperation = (a, b) => a + b;
console.log(added(2, 3));

const mutiply: MathOperation = (a, b) => a * b;
console.log(mutiply(2, 5));

// Interface Extends
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "John Doe",
  employeeId: 108,
};

console.log(employee);
