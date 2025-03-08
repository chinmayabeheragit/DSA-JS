function groupByFirstLetter(names) {
    return names.reduce((groups, name) => {
        let firstLetter = name[0].toUpperCase();
        if (!groups[firstLetter]) {
            groups[firstLetter] = [];
        }
        groups[firstLetter].push(name);
        return groups;
    }, {});
}

const names = ["Alice", "Adam", "Bob", "Charlie", "Chris", "Brian"];
console.log(groupByFirstLetter(names));
