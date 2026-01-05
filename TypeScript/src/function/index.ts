// Basic function with params & return type
const calc = (a: number, b: number): number => {
  return a + b;
};

console.log(calc(4, 8));

// funtion without return (void)
const says = (name: string): void => {
  console.log(`Hello ${name}`);
};

says("Alex");

// function with optional params
const fullName = (first: string, last?: string): string => {
  return last ? `Hello ${first + " " + last}` : `Hello ${first}`;
};

console.log(fullName("John", "Doe"));
console.log(fullName("John"));

// function with default value
const welcomeUser = (name: string, role: string = "guest"): void => {
  console.log(`Welcome, ${name}! Your role is ${role}`);
};

welcomeUser("Alex");
welcomeUser("John", "admin");
