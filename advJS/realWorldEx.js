class User {
    constructor(username, password) {
        this.username = username;
        this._password = password; // Private (by convention)
    }

    // Method to authenticate
    authenticate(password) {
        return this._password === password;
    }
}

// Subclass: Admin
class Admin extends User {
    constructor(username, password, role) {
        super(username, password);
        this.role = role;
    }

    manageUsers() {
        console.log(`${this.username} is managing users.`);
    }
}

const user1 = new User("john_doe", "secret123");
console.log(user1.authenticate("secret123")); // Output: true

const admin1 = new Admin("admin_user", "adminpass", "superadmin");
admin1.manageUsers(); // Output: admin_user is managing users.
