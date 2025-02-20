const user = { name: "Alice", age: 30, country: "USA" };

const { name, ...restDetails } = user;

console.log(name); // Alice
console.log(restDetails); // { age: 30, country: "USA" }


const colors = ["red", "blue", "green", "yellow"];

const [first, second, ...restColors] = colors;

console.log(first, second); // red blue
console.log(restColors); // [ 'green', 'yellow' ]
