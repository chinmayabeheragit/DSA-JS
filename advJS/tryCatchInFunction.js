function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero!"); // Manually throw an error
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 2)); // ✅ Works fine (Output: 5)
    console.log(divide(5, 0));  // ❌ Throws error because b = 0
  } catch (error) {
    console.log("Caught an error:", error.message);
  }
  