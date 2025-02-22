function findAllOccurrences(str, subStr) {
    const indices = [];
    let startIndex = 0;
    let index;
    while ((index = str.indexOf(subStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + 1;
    }
    return indices;
}

// Example usage:
console.log(findAllOccurrences("hello hello hello", "lo")); // Output: [3, 9, 15]
