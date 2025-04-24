const fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grape"); // ["apple", "grape", "orange"]
console.log(fruits); // Output: ["apple", "grape", "orange"]
// The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.