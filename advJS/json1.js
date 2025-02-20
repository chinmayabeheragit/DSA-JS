// {
//     "name": "Alice",
//     "age": 25,
//     "isStudent": false,
//     "hobbies": ["reading", "coding", "gaming"],
//     "address": {
//         "city": "New York",
//         "zip": "10001"
//     }
// }


// const jsonString = '{"name": "Alice", "age": 25, "isStudent": false}';

// const userObject = JSON.parse(jsonString);

// console.log(userObject.name); // Output: Alice
// console.log(userObject.age);  // Output: 25
// console.log(userObject.isStudent); // Output: false


// const invalidJson = "{'name': 'Alice', 'age': 25}"; // Wrong! Keys must use double quotes

// try {
//     const obj = JSON.parse(invalidJson);
//     console.log(obj);
// } catch (error) {
//     console.error("Error parsing JSON:", error.message);
// }


// const user = {
//     name: "Bob",
//     age: 30,
//     isAdmin: true
// };

// const jsonString = JSON.stringify(user);
// console.log(jsonString);


// const employee = {
//     name: "John",
//     department: "Engineering",
//     skills: ["JavaScript", "React", "Node.js"],
//     address: {
//         city: "San Francisco",
//         zip: "94105"
//     }
// };


// const formattedJSON = JSON.stringify(employee, null, 4); // Indent with 4 spaces
// console.log(formattedJSON);

// const jsonString = JSON.stringify(employee);
// console.log(jsonString);


// const user = {
//     name: "Alice",
//     age: 25,
//     password: "secret123"
// };

// // Exclude "password" field
// const jsonString = JSON.stringify(user, ["name", "age"], 2);
// console.log(jsonString);


// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => response.json()) // Convert response to JSON object
//     .then(data => console.log(data))   // Use the data
//     .catch(error => console.error("Error fetching data:", error));



// const user = { name: "Alice", age: 25 };

// // Save object as JSON string
// localStorage.setItem("user", JSON.stringify(user));

// // Retrieve and parse back into object
// const storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser.name); // Output: Alice


