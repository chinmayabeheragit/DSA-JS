function countDivisibleDigits(n) {
    let count = 0;
    let temp = n.toString(); // Convert number to string to iterate digits

    for (let char of temp) {
        let digit = parseInt(char); // Convert character to number
        if (digit !== 0 && n % digit === 0) { // Check divisibility
            count++;
        }
    }

    return count;
}

// Example usage
let n = 336;
console.log(countDivisibleDigits(n)); // Output: 3
