// Basic Callback
var greet = function (name, callback) {
    var message = "Hello ".concat(name);
    callback(message);
};
greet("John Doe", function (text) { return console.log(text); });
// Callback with return value
var calculate = function (a, b, callback) {
    return callback(a, b);
};
var sum = calculate(5, 3, function (x, y) { return x + y; });
var product = calculate(5, 3, function (x, y) { return x * y; });
console.log(sum);
console.log(product);
// Callback async
var fetchData = function (callback) {
    setTimeout(function () {
        callback("Data from server 🚀");
    }, 2000);
};
fetchData(function (res) {
    console.log(res);
});
