var person;
person = ["John Doe", 27];
console.log(person);
// the sequence must be correct
// person = [27, "John Doe"]
// console.log(person);
// tuple with more than 2 elements
var product;
product = [1, "Xiaomi", true];
console.log(product);
//  tuple in function return
var getUser = function () {
    return [27, "Hello World"];
};
console.log(getUser());
// optional tuple element
var point;
point = [100, 200, 300];
console.log(point);
point = [100, 200];
console.log(point);
point = [100];
console.log(point);
// readonly tuple
var rgb = [255, 0, 0];
// rgb[0] = 100 ERROR
