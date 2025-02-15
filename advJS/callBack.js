// Function that takes another function as a callback
function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Calling the callback function
}

// Callback function
function sayGoodbye() {
    console.log("Goodbye! Have a great day!");
}

// Calling greetUser and passing sayGoodbye as a callback
greetUser("John", sayGoodbye);
