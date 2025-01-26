const arr = [1, 2, 3];
const result = arr.flatMap((x) => [x, x * 2]);
console.log(result); // Output: [1, 2, 2, 4, 3, 6]
