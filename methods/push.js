const arr = [1, 2, 3];
const shallow = [...arr];
arr.push(4);
shallow.push(4,5);
console.log(arr); // Output: [1, 2, 3, 4]
console.log(shallow); // Output: [1, 2, 3, 5]
