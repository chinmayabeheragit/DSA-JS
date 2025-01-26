function setup(config) {
    const mode = config.mode ?? "production"; // Default mode to "production"
    const retries = config.retries ?? 3; // Default retries to 3
    console.log(`Mode: ${mode}, Retries: ${retries}`);
  }
  
  setup({ mode: "development" }); // Output: Mode: development, Retries: 3
  setup({ retries: 5 }); // Output: Mode: production, Retries: 5
  