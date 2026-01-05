// alias for union
type ID = string | number;

let userId: ID;

userId = "user-01";
console.log(userId);

userId = 1;
console.log(userId);

// alias for object
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const user1: User = {
  id: 27,
  name: "John Doe",
  isAdmin: false,
};

console.log(user1);

// alias for function type
type Greet = (name: string) => string;

const greet: Greet = (name) => {
  return `Hello ${name}`;
};

console.log(greet("Kanna"));
