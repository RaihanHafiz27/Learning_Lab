// Basic Callback
const greet = (name: string, callback: (msg: string) => void) => {
  const message = `Hello ${name}`;
  callback(message);
};

greet("John Doe", (text) => console.log(text));

// Callback with return value
const calculate = (
  a: number,
  b: number,
  callback: (x: number, y: number) => number
): number => {
  return callback(a, b);
};

const sum = calculate(5, 3, (x, y) => x + y);
const product = calculate(5, 3, (x, y) => x * y);

console.log(sum);
console.log(product);

// Callback async
const fetchData = (callback: (data: string) => void) => {
  setTimeout(() => {
    callback("Data from server 🚀");
  }, 2000);
};

fetchData((res) => {
  console.log(res);
});
