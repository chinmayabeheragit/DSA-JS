try {
    console.log("Trying to read a file...");
    throw new Error("File not found!");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Closing file connection...");
  }
  