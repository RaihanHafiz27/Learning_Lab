// without function overload
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result1 = combine("Hello", "World");
var result2 = combine(20, 8);
console.log(result1);
console.log(result2);
function overload(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b; // merge string
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b; // calculate number
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b); // merge arrays
    }
    throw new Error("Type Invalid!!!");
}
var result3 = overload("John", "Doe");
var result4 = overload(12, 18);
var result5 = overload([1, 2, 3], [6, 7, 8]);
console.log(result3);
console.log(result4);
console.log(result5);
var testing = function (a, b) {
    return a + b;
};
console.log(testing("Hello", "World"));
console.log(testing(20, 7));
