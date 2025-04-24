const names = ["Chinmaya", "Amit", "Rahul"];
const index = names.findIndex(name => name === "Rahul"); // 2
console.log(index); // Output: 2
// The findIndex method returns the index of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, -1 is returned.