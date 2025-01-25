function validateAge(input) {
    const age = Number(input); // Explicitly convert input to number
    if (isNaN(age)) {
      console.log("Invalid age");
    } else {
      console.log("Valid age");
    }
  }
  
  validateAge("25"); // Valid age
  validateAge("abc"); // Invalid age
  