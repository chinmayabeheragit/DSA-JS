const fs = require("fs");

// Top level - run this 10 times and results will vary
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(`top-level timeout ${i}`), 0);
  setImmediate(() => console.log(`top-level immediate ${i}`));
}

// Inside I/O - always deterministic
fs.readFile(__filename, () => {
  console.log("\n--- inside I/O callback ---");
  setTimeout(() => console.log("I/O timeout"), 0);
  setImmediate(() => console.log("I/O immediate")); // always first
});