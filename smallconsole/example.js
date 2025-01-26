const userSettings = {
    theme: null,
    fontSize: undefined,
    language: "English",
  };
  
  // Fallbacks using ??
  const theme = userSettings.theme ?? "Light";
  const fontSize = userSettings.fontSize ?? 16;
  const language = userSettings.language ?? "Default Language";
  
  console.log(theme); // Output: "Light"
  console.log(fontSize); // Output: 16
  console.log(language); // Output: "English"
  