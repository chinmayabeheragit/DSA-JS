function rotateArray(arr) {
    let n = arr.length; // Get array size
    
    let temp = arr[0]; // Store first element
    
    // Shift elements left
    for (let i = 1; i < n; i++) {
        arr[i - 1] = arr[i];
    }
    
    // Move first element to last position
    arr[n - 1] = temp;
    
    return arr;
}

// Example usage
let arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr)); // Output: [2, 3, 4, 5, 1]
