function isSpecialArray(nums) {
    let n = nums.length;

    // Loop through adjacent pairs
    for (let i = 0; i < n - 1; i++) {
        if ((nums[i] % 2) === (nums[i + 1] % 2)) {
            return false; // If both numbers are even or both are odd, return false
        }
    }

    return true; // If all adjacent pairs are valid, return true
}

// Test cases
console.log(isSpecialArray([2, 1, 4]));  // Output: true
console.log(isSpecialArray([4, 3, 1, 6]));  // Output: false
console.log(isSpecialArray([1]));  // Output: true
