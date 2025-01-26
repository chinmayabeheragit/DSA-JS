console.log(0 || "Hello"); // Output: "Hello" (first value is falsy, so it checks the second)
console.log(1 || "Hello"); // Output: 1 (first value is truthy, so it stops)

const fallbackValue = null || "Default";
console.log(fallbackValue); // Output: "Default" (because null is falsy)
