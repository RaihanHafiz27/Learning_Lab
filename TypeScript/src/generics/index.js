var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// without generics (use any)
var testing = function (arg) {
    return arg;
};
var a = testing(5); // number -> but TS doesn't know
var b = testing("Hello"); // string -> but TS also doesn't know
console.log(a);
console.log(b.toUpperCase());
// with generics
function identity(arg) {
    return arg;
}
var c = identity(10); // T = number
var d = identity("World"); // T = string
// let e = identity<boolean>("World"); // Error
console.log(c);
console.log(d.toUpperCase());
// generics arrow function
var wrapArray = function (item) {
    return [item];
};
console.log(wrapArray(15));
console.log(wrapArray("John"));
// generics array
var getFirst = function (arr) {
    return arr[0];
};
var numbers = getFirst([10, 20, 30]); // T = number
var names = getFirst(["Anto", "Budi", "Andi"]); // T = string
console.log(numbers);
console.log(names);
var res = {
    data: {
        name: "John Doe",
        age: 22,
    },
    status: 200,
};
console.log(res);
console.log(res.data);
console.log(res.status);
var stringToNumber = {
    key: "age",
    value: 22,
};
var numberToBoolean = {
    key: 12,
    value: true,
};
console.log(stringToNumber);
console.log(numberToBoolean);
// generics with constraint
var logLength = function (item) {
    console.log(item.length);
};
logLength("Hellow");
logLength([1, 2, 3, 4, 5]);
// logLength(100)  // Error bcs number doesn't have length
// Default Types on Generics
var user = function (value) {
    return value;
};
console.log(user(123));
console.log(user("Hola"));
// Multiple Type Parameters
var pair = function (key, value) {
    return [key, value];
};
console.log(pair("Hello", 27));
console.log(pair(2005, false));
// OR like this
var mergeObj = function (param1, param2) {
    return __assign(__assign({}, param1), param2);
};
console.log(mergeObj({ name: "John Doe" }, { isOnline: true }));
console.log(mergeObj({ age: 12 }, { address: "abc123" }));
