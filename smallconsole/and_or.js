const user = null;
const username = user || "Guest"; // If user is null, fallback to "Guest"
console.log(username); // Output: "Guest"

const isLoggedIn = true;
const greeting = isLoggedIn && "Welcome back!";
console.log(greeting); // Output: "Welcome back!"
