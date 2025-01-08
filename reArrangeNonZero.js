const readline = require("readline");

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to move zeros to the end of the array
function moveZerosToEnd(arr) {
    let j = 0; // Pointer to place the next non-zero element

    // Traverse the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) { // If element is non-zero
            arr[j] = arr[i];
            j++;
        }
    }

    // Fill the remaining positions with zeros
    for (let i = j; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

// Input size of the array
rl.question("Enter the size of the array: ", (n) => {
    const size = parseInt(n);
    console.log(`Enter ${size} elements of the array separated by spaces:`);

    rl.on("line", (input) => {
        const arr = input.split(" ").map(Number); // Convert input to an array of numbers

        // Validate the number of elements
        if (arr.length !== size) {
            console.log(`Please enter exactly ${size} elements.`);
        } else {
            const result = moveZerosToEnd(arr); // Rearrange the array
            console.log("Modified array:", result.join(" "));
            rl.close(); // Close the readline interface
        }
    });
});
