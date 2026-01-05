// change all properties to optional with Partial
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

const user1: PartialUser = {
  name: "John Doe",
};

const user2: PartialUser = {
  id: 2,
  name: "Alex",
};

console.log(user1);
console.log(user2);

// The opposite of Partial, all properties become required
interface Profile {
  username?: string;
  age?: number;
}

type RequiredProfile = Required<Profile>;

// must be with all properties
const user3: RequiredProfile = {
  username: "John Doe",
  age: 22,
};

console.log(user3);

// makes all properties immutable after initialization
interface Config {
  apiKey: string;
  version: number;
}

const config1: Config = {
  apiKey: "1122334455",
  version: 1.2,
};

const config2: Readonly<Config> = {
  apiKey: "1122334455",
  version: 1.2,
};

config1.apiKey = "678"; // we can change without Readonly
// config2.apiKey = "678"; // will be an error

console.log(config1);
console.log(config2);

// select several properties from a type
interface Account {
  id: number;
  name: string;
  email: string;
  password: string;
}

type AccountPublic = Pick<Account, "name" | "email">;

const user4: AccountPublic = {
  name: "John Doe",
  email: "John@gmail.com",
  // password : "1233" error
};

console.log(user4);

// opposite of Pick, which is to remove certain properties from a type.
type SafeAccount = Omit<Account, "password">;

const user5: SafeAccount = {
  id: 1,
  name: "Anna Liebert",
  email: "Example@gmail.com",
  // password : "secret" error
};

console.log(user5);

// Create an object type with a specific key and value
type Roles = "admin" | "user" | "guest";

const rolePermissions: Record<Roles, string[]> = {
  admin: ["create", "read", "update", "delete"],
  user: ["read", "update"],
  guest: ["read"],
};

console.log(rolePermissions);

// Exclude certain types from the union
type Status = "success" | "pending" | "error";

type NonPending = Exclude<Status, "pending">;

let result: NonPending = "success";
result = "error";
// result = "pending" // Error

console.log(result);

// remove null and undefined from a type
type MaybeUser = string | null | undefined;

type SafeUser = NonNullable<MaybeUser>;

let username: SafeUser = "John Doe";
// username = null // Errror
// username = undefined // Error

console.log(username);

// Taking the data type returned by a function.
const getUser = () => {
  return { id: 1, name: "John Doe" };
};

type TypeUser = ReturnType<typeof getUser>;
// it's like { id : number, name : string }

const newUser: TypeUser = {
  id: 2,
  name: "Anna Liebert",
};

console.log(newUser);

// Taking the type from a class instance
class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}

type CarInstance = InstanceType<typeof Car>;

const myCar: CarInstance = new Car("Toyota");

console.log(myCar);
