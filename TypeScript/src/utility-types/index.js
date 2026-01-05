var user1 = {
    name: "John Doe",
};
var user2 = {
    id: 2,
    name: "Alex",
};
console.log(user1);
console.log(user2);
// must be with all properties
var user3 = {
    username: "John Doe",
    age: 22,
};
console.log(user3);
var config1 = {
    apiKey: "1122334455",
    version: 1.2,
};
var config2 = {
    apiKey: "1122334455",
    version: 1.2,
};
config1.apiKey = "678"; // we can change without Readonly
// config2.apiKey = "678"; // will be an error
console.log(config1);
console.log(config2);
var user4 = {
    name: "John Doe",
    email: "John@gmail.com",
    // password : "1233" error
};
console.log(user4);
var user5 = {
    id: 1,
    name: "Anna Liebert",
    email: "Example@gmail.com",
    // password : "secret" error
};
console.log(user5);
var rolePermissions = {
    admin: ["create", "read", "update", "delete"],
    user: ["read", "update"],
    guest: ["read"],
};
console.log(rolePermissions);
var result = "success";
result = "error";
// result = "pending" // Error
console.log(result);
var username = "John Doe";
// username = null // Errror
// username = undefined // Error
console.log(username);
// Taking the data type returned by a function.
var getUser = function () {
    return { id: 1, name: "John Doe" };
};
// it's like { id : number, name : string }
var newUser = {
    id: 2,
    name: "Anna Liebert",
};
console.log(newUser);
