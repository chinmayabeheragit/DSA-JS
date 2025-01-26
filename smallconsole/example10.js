var hoistedVar; // Declaration is hoisted
console.log(hoistedVar); // undefined
hoistedVar = "I am hoisted"; // Initialization happens here
console.log(hoistedVar); // "I am hoisted"
