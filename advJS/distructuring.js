// const user = { name: "Alice", age: 25 };

// //so instead of doing 
// // const name = user.name;
// // const age = user.age;


// // do this
// const { name, age } = user;

// console.log("name:",name, "age:",age); // Alice 25

// const numbers = [10, 20, 30, 40];

// // Extracting first two values
// const [first, third] = numbers;// accsess the first and second elemnet of the array

// console.log(first, third); // 10 20


const numbers = [10, 20, 30, 40];

// Skipping the second value
const [first, , ,fourth] = numbers;

console.log(first, fourth); // 10 30

