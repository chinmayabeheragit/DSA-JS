try {
    let x = undefinedVariable; // ❌ This variable is not defined
  } catch (error) {
    console.log("Error caught:", error.message);
  }
  