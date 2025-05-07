function greetUser(name, callback) {
    console.log('Hello, ' + name);
    callback(); // calling the callback
}

function sayBye() {
    console.log('Goodbye!');
}

// Pass `sayBye` as a callback to `greetUser`
greetUser('Alice', sayBye);
