// interface
interface Person {
  name: string;
  age: number;
}

interface Person {
  email?: string;
}

const user: Person = {
  name: "John Doe",
  age: 20,
  email: "johndoe@gmail.com",
};

console.log(user);

// Type
type User = {
  name: string;
  age: number;
};

// when we redeclare this type, it will be an error (Duplicate identifier 'User'.)
// type User = {email : string} // cannot merge

// we can merge with intersection
type WithEmail = User & { email: string };

const user1: WithEmail = {
  name: "Alexa",
  age: 26,
  email: "Alexa@gmail.com",
};

console.log(user1);

// And the type also has several flexible types
type ID = string | number; // union
type Coordinates = [number, number]; // tuple
type Status = "active" | "inactive";

const id: ID = "XYZ-102";
console.log(id);

const map: Coordinates = [122, 654];
console.log(map);

const status: Status = "active";
console.log(status);
