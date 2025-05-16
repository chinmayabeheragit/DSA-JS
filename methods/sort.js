const arr = [4, 2, 5, 1];
arr.sort((a, b) => a - b); // Ascending order
console.log(arr); // Output: [1, 2, 4, 5]

//The sort() method applies the compare function to every pair of elements in the array. Here's how it works in this case:

// Initial Array: [4, 2, 5, 1]
// Step 1: Compare 4 and 2:

// 4 - 2 = 2 (positive): 2 should come before 4.
// Result: [2, 4, 5, 1]
// Step 2: Compare 4 and 5:

// 4 - 5 = -1 (negative): 4 stays before 5.
// Result: [2, 4, 5, 1]
// Step 3: Compare 5 and 1:

// 5 - 1 = 4 (positive): 1 should come before 5.
// Result: [2, 4, 1, 5]
// Step 4: Compare 4 and 1:

// 4 - 1 = 3 (positive): 1 should come before 4.
// Result: [2, 1, 4, 5]
// Step 5: Compare 2 and 1:

// 2 - 1 = 1 (positive): 1 should come before 2.
// Final Result: [1, 2, 4, 5]
