const nested = [1, [2, [3, 4]]];
nested.flat(2); // [1, 2, 3, 4]
console.log(nested.flat(2)); // Output: [1, 2, 3, 4]