function map(arr, fn) {
    let result = []; // Initialize an empty array to store the transformed elements.
    
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i)); // Apply fn to each element and index, then add to result.
    }
    
    return result; // Return the transformed array.
}

// Example Usage:
const arr1 = [1, 2, 3];
const fn1 = function plusone(n) { return n + 1; };
console.log(map(arr1, fn1)); // Output: [2, 3, 4]

const arr2 = [1, 2, 3];
const fn2 = function plusI(n, i) { return n + i; };
console.log(map(arr2, fn2)); // Output: [1, 3, 5]

const arr3 = [10, 20, 30];
const fn3 = function constant() { return 42; };
console.log(map(arr3, fn3)); // Output: [42, 42, 42]
