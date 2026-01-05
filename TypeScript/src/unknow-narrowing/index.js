// UNKNOW vs ANY
var valueAny = "Hello TypeScript";
// let valueAny: any = 12;
var valueUnknow = "Hello TypeScript";
// let valueUnknow: unknown = 12;
// any : can be used immediately (but dangerous)
console.log(valueAny.toUpperCase()); // if the data is not a string , runtime will encounter an error
// unknow : must be checked
if (typeof valueUnknow === "string") {
    console.log(valueUnknow.toUpperCase());
}
else if (typeof valueUnknow === "number") {
    console.log(valueUnknow * 2);
}
// NARROWING IN UNION TYPE
var printId = function (id) {
    // Narrowing with typeof
    if (typeof id === "string") {
        console.log("String ID : ".concat(id.toUpperCase()));
    }
    else {
        console.log("Number ID : ".concat(id * 2));
    }
};
printId("abc");
printId(123);
