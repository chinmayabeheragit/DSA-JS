function groupByEvenOdd(numbers) {
    return numbers.reduce((groups, num) => {
        const key = num % 2 === 0 ? "Even" : "Odd";
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(num);
        return groups;
    }, {});
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(groupByEvenOdd(numbers));
