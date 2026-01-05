var userId;
userId = "user-01";
console.log(userId);
userId = 1;
console.log(userId);
// userId = true
// console.log(userId);
// function with union
var printId = function (id) {
    console.log("ID :", id);
};
printId("user-02");
printId(2);
// Narrowing
var printLength = function (value) {
    if (typeof value === "string") {
        return "Length : ".concat(value.length);
    }
    else {
        return "Digits : ".concat(value.toString().length);
    }
};
console.log(printLength("Hello World"));
console.log(printLength(12345));
