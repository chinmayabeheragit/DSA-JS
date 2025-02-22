class BankAccount {
    #balance; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
    }

    getBalance() {
        return this.#balance; // Accessible within the class
    }
}

const account = new BankAccount(1000);
account.deposit(500); // Output: Deposited: $500. New Balance: $1500
console.log(account.getBalance()); // Output: 1500
// console.log(account.#balance); // ❌ ERROR: Private field not accessible
