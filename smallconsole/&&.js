console.log(0 && "Hello"); // Output: 0 (first value is falsy, so it stops)
console.log(1 && "Hello"); // Output: "Hello" (first value is truthy, so it evaluates the second)

const isLoggedIn = true;
const username = isLoggedIn && "JohnDoe";
console.log(username); // Output: "JohnDoe" (because isLoggedIn is true)
