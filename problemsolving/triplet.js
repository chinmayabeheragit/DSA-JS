function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore += 1;
        } else if (a[i] < b[i]) {
            bobScore += 1;
        }
    }

    return [aliceScore, bobScore];
}

// Example Usage
const a = [17, 28, 30];
const b = [99, 16, 8];
const result = compareTriplets(a, b);
console.log(result); // Output: [2, 1]
