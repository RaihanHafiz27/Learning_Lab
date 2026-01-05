// String
var username = "John Doe";
var greet = "Hi ".concat(username);
console.log(greet);
// Number Int and Float
var age = 27;
var height = 172.5;
console.log("Hello I'm ".concat(username, ", I'm ").concat(age, " years old and my height ").concat(height, " cm"));
// Boolean
var isAdmin = true;
console.log(isAdmin);
// Null & Undefined
var numberPhone = null;
var address = undefined;
console.log(numberPhone);
console.log(address);
// Symbol
var id1 = Symbol("id");
var id2 = Symbol("id");
var id3 = Symbol("jp");
console.log(id1 === id2); // false, must be unique
console.log(id1 !== id3); // true, bcs not same
// bigInt
var biggest = 123456789012345678901234567890n;
console.log(biggest);
