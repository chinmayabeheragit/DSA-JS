let jsonString = '{ "name": "John", "age": 30 }'; // Correct JSON

try {
  let user = JSON.parse(jsonString);
  console.log("User:", user.name);
  console.log("User:", user.age);

} catch (error) {
  console.log("Invalid JSON format:", error.message);
}
