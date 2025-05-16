const arr = [1, 2, 3];
const shallow = [...arr];
const last = shallow.pop();
console.log(arr); // Output: [1, 2]
console.log(last); // Output: 3
