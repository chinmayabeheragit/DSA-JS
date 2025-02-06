const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log("Tell me anything...");
  readline.question('', (anything) => {
    console.log(`Hmm... ${anything} ... Really?`);
    readline.close();
  });
  

  //What Happens:
// readline module:

// This module allows us to read input from the user in a Node.js environment (command-line).
// readline.createInterface sets up an interface for reading input and output from the terminal.
// console.log("Tell me anything...");

// Displays a prompt asking the user to type something.
// readline.question('', (anything) => { ... }):

// The readline.question method waits for the user to input text and press Enter.
// Once the user provides input, it stores the input in the anything variable.
// Response (console.log):

// After receiving the input, it prints the response: Hmm... <user input> ... Really?
// readline.close():

// Closes the input stream to prevent the program from waiting for more input.
