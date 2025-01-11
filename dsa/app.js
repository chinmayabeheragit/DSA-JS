const express = require('express');

const app = express();


// console.log(x); // undefined (hoisted, but not initialized)
// var x = 5;




// console.log(y); // ReferenceError (not accessible in TDZ)
// let y = 10;

// greet(); // "Hello!"
// function greet() {
//     console.log("Hello!");
// }


greet(); // TypeError: greet is not a function
var greet = function () {
    console.log("Hello!");
};






















app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});