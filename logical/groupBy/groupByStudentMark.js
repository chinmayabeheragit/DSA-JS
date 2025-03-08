function groupByMarks(students) {
    return students.reduce((groups, student) => {
        let category;
        if (student.marks < 40) category = "Fail";
        else if (student.marks < 60) category = "Average";
        else if (student.marks < 80) category = "Good";
        else category = "Excellent";

        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(student);
        return groups;
    }, {});
}

const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 72 },
    { name: "Charlie", marks: 60 },
    { name: "David", marks: 50 },
    { name: "Eve", marks: 30 }
];

console.log(groupByMarks(students));
