try {
    let result = 10 / 0; // No error, just Infinity
    console.log("Result:", result);
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
  