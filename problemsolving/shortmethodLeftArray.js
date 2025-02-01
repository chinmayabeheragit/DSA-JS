function rotateArray(arr) {
    arr.push(arr.shift()); // Removes first element and adds it to the end
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 1]
