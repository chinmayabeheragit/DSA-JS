function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

second();

// Output:
// First
// Second
// Explanation:
// When the `second` function is called, it first calls the `first` function, which logs "First" to the console. After that, it logs "Second". 
// 

{/**Step 1: [ second ]
Step 2: [ second, first ]
Step 3: [ second ]
Step 4: [ ] */}