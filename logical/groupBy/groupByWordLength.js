function groupByWordLength(words) {
    return words.reduce((groups, word) => {
        let length = word.length;
        if (!groups[length]) {
            groups[length] = [];
        }
        groups[length].push(word);
        return groups;
    }, {});
}

const words = ["apple", "bat", "cat", "dog", "elephant", "fox"];
console.log(groupByWordLength(words));
