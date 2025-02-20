const user = { name: "Alice" };

const { name, age = 25 } = user;

console.log(name, age); // Alice 25


const numbers = [1];

const [first, second = 100] = numbers;

console.log(first, second); // 1 100
