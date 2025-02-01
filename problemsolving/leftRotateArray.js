function rotateArray(arr) {
    let n = arr.length; // Get the length of the array
    
    let temp = arr[0]; // Store the first element (it will be moved to last)
    
    // Loop from second element to last and shift each element one position left
    for (let i = 1; i < n; i++) {
        arr[i - 1] = arr[i]; // Move current element to the previous index
    }
    
    // Place the stored first element at the last position
    arr[n - 1] = temp;
    
    return arr; // Return the rotated array
}

// Example array
let arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr)); // Expected Output: [2, 3, 4, 5, 1]
