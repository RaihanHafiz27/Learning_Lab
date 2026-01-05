// array with types
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John Doe", "Kanna", "Asuna"];
let flags: boolean[] = [true, false, true];

console.log(numbers);
console.log(names);
console.log(flags);

// alternative with generic
// let numbers: Array<number> = [1, 2, 3, 4, 5];
// let names: Array<string> = ["John Doe", "Kanna", "Asuna"];
// let flags: Array<boolean> = [true, false, true];

// array mix (union)
let mixed: (string | number)[] = [1, "Hello", 3, "World"];
console.log(mixed);

// array of object
type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Kanna" },
];

console.log(users);
console.log(users[1]);

// readonly array
let collection: readonly number[] = [3, 6, 78, 8];
console.log(collection);

// collection.push(27) // ERROR
