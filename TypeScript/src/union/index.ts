let userId: string | number;

userId = "user-01";
console.log(userId);

userId = 1;
console.log(userId);

// userId = true
// console.log(userId);

// function with union
const printId = (id: string | number) => {
  console.log("ID :", id);
};

printId("user-02");
printId(2);

// Narrowing
const printLength = (value: string | number) => {
  if (typeof value === "string") {
    return `Length : ${value.length}`;
  } else {
    return `Digits : ${value.toString().length}`;
  }
};

console.log(printLength("Hello World"));
console.log(printLength(12345));
