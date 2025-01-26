let globalVar = "Global"; // Global scope

function outerFunction() {
  let localVar = "Local"; // Local scope
  var hoistedVar = "Hoisted Variable"; // Function scope (hoisted)
  
  {
    let blockVar = "Block Scoped"; // Block scope
    console.log(blockVar); // Output: "Block Scoped"
  }
  
  // Shadowing example
  let globalVar = "Shadowed"; // Shadows the global variable
  console.log(globalVar); // Output: "Shadowed"
  
  // Hoisting example
  console.log(hoistedVar); // Output: "Hoisted Variable"
}

outerFunction();
console.log(globalVar); // Output: "Global"
