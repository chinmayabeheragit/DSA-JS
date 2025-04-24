const colors = ["red", "green", "blue"];
colors.includes("green"); // true
colors.includes("yellow"); // false
colors.includes("green"); // false, starts searching from index 2 
// colors.includes("green", -1); // true, starts searching from index -1 (last element)
// colors.includes("green", -2); // false, starts searching from index -2 (second last element)   
console.log(colors.includes("green")); // true
console.log(colors.includes("yellow")); // false