interface Address {
  street: string;
  city: string;
  postalCode: string;
}

interface Order {
  id: number;
  product: string;
  quantity: number;
  price: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  address: Address; // nested object
  orders: Order[]; // array of objects
}

const user1: User = {
  id: 1,
  name: "John Doe",
  email: "johndoe@gmail.com",
  isAdmin: false,
  address: {
    street: "brookside",
    city: "Manchester",
    postalCode: "112233",
  },
  orders: [
    {
      id: 1,
      product: "iPhone 17 Pro Max",
      price: 1000,
      quantity: 1,
    },
    {
      id: 2,
      product: "Addidas zero",
      price: 500,
      quantity: 1,
    },
  ],
};

console.log(user1);
console.log(user1.address.city);
console.log(user1.orders[1]);
