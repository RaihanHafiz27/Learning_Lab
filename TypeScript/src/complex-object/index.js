var user1 = {
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
