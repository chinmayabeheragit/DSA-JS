const arr = [1, 2, 3, 4];
const index = arr.findIndex((num) => num > 3);
console.log(index); // Output: 2

// //The array is [1, 2, 3, 4].
// The callback function (num) => num > 2 is applied to each element:
// For num = 1: 1 > 2 → false.
// For num = 2: 2 > 2 → false.
// For num = 3: 3 > 2 → true. This satisfies the condition.
// The findIndex() method stops as soon as it finds the first matching element (3) and returns its index, which is 2.