const orders = [
    { id: 1, item: 'Laptop', price: 1200 },
    { id: 2, item: 'Phone', price: 800 },
    { id: 3, item: 'Tablet', price: 600 },
    { id: 4, item: 'Monitor', price: 300 },
    { id: 5, item: 'Keyboard', price: 100 }
];

const withTax = orders.map(order => ({
    ...order,
    tax: order.price * 0.1
}))
console.log(withTax);

// This code takes an array of orders and maps over it to create a new array where each order object includes a tax property.
// The tax is calculated as 10% of the price of each order. The spread operator (...) is used to copy the existing properties of each order while adding the new tax property.