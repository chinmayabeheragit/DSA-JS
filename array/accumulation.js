const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, value) => acc + value, 0);
console.log(sum); // Output: 15
const product = arr.reduce((acc, value) => acc * value, 1);
console.log(product); // Output: 120