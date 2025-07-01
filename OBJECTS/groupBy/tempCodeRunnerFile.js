function groupByEvenOdd(numbers) {
    return numbers.reduce((groups, num) => {
        const key = num % 2 === 0 ? "Even" : "Odd";
        if (!groups[key]) {
            groups[key] = [];
        }