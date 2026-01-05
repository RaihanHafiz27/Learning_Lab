var key;
key = "name";
key = "age";
key = "isOnline";
var getCarProperty = function (car, key) {
    return car[key];
};
var myCar = { brand: "Toyota", year: 2018, isElectric: false };
console.log(getCarProperty(myCar, "brand"));
console.log(getCarProperty(myCar, "isElectric"));
// keyof with generics
var getValue = function (obj, key) {
    return obj[key];
};
var student = { name: "John Doe", score: 90 };
var val1 = getValue(student, "name");
var val2 = getValue(student, "score");
// const val3 = getValue(student, "age")
console.log(val1);
console.log(val2);
