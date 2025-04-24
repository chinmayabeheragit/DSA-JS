const items = ["a", "b", "c", "d"];
items.slice(1, 3); // ["b", "c"]
console.log(items); // Output: ["a", "b", "c", "d"]
// The slice method returns a shallow copy of a portion of an array into a new array object. The original array is not modified. The first argument specifies the start index (inclusive) and the second argument specifies the end index (exclusive).