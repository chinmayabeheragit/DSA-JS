const user = { name: "John", settings: { theme: "dark" } };
const userCopy = { ...user }; // Shallow copy

userCopy.settings.theme = "light";
userCopy.name="stark";
console.log(user.settings.theme,userCopy.name,user.name); // Output: "light" (original affected)
