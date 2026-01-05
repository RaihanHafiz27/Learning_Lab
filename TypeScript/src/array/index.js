// array with types
var numbers = [1, 2, 3, 4, 5];
var names = ["John Doe", "Kanna", "Asuna"];
var flags = [true, false, true];
console.log(numbers);
console.log(names);
console.log(flags);
// alternative with generic
// let numbers: Array<number> = [1, 2, 3, 4, 5];
// let names: Array<string> = ["John Doe", "Kanna", "Asuna"];
// let flags: Array<boolean> = [true, false, true];
// array mix (union)
var mixed = [1, "Hello", 3, "World"];
console.log(mixed);
var users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Kanna" },
];
console.log(users);
console.log(users[1]);
// readonly array
var collection = [3, 6, 78, 8];
console.log(collection);
// collection.push(27) // ERROR
