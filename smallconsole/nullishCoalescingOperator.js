const value = null ?? "Fallback";
console.log(value); // Output: "Fallback" (because null is considered invalid)

const value2 = 0 ?? "Fallback";
console.log(value2); // Output: 0 (because 0 is valid in `??`)
