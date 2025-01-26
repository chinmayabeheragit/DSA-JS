const count = 0 || 10; // Fallback to 10, which is unintended
console.log(count); // Output: 10

const count2 = 0 ?? 10; // Doesn't fallback because 0 is valid
console.log(count2); // Output: 0
