// Basic function with params & return type
var calc = function (a, b) {
    return a + b;
};
console.log(calc(4, 8));
// funtion without return (void)
var says = function (name) {
    console.log("Hello ".concat(name));
};
says("Alex");
// function with optional params
var fullName = function (first, last) {
    return last ? "Hello ".concat(first + " " + last) : "Hello ".concat(first);
};
console.log(fullName("John", "Doe"));
console.log(fullName("John"));
// function with default value
var welcomeUser = function (name, role) {
    if (role === void 0) { role = "guest"; }
    console.log("Welcome, ".concat(name, "! Your role is ").concat(role));
};
welcomeUser("Alex");
welcomeUser("John", "admin");
