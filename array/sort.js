const nums = [4, 2, 8, 1];
nums.sort((a, b) => a - b); // [1, 2, 4, 8]
console.log(nums); // Output: [1, 2, 4, 8]
// The sort method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, but you can provide a compare function to customize the sort order.    
// In this case, we are sorting the numbers in ascending order by subtracting b from a.