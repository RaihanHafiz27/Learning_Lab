// Basic Object
var person = {
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
var car = {
    brand: "Toyota",
};
console.log(car);
car.year = 1995;
console.log(car);
// Nexted Object
var student = {
    name: "Alexa",
    age: 17,
    address: {
        street: "Eidenburg",
        no: 29,
    },
};
console.log(student);
