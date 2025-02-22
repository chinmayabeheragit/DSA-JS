class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} earns ${this.salary} per year.`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    // Overriding the getDetails method
    getDetails() {
        return `${this.name} manages the ${this.department} department and earns ${this.salary} per year.`;
    }
}

const emp1 = new Employee("John", 50000);
console.log(emp1.getDetails()); // Output: John earns 50000 per year.

const mgr1 = new Manager("Alice", 80000, "IT");
console.log(mgr1.getDetails()); // Output: Alice manages the IT department and earns 80000 per year.
