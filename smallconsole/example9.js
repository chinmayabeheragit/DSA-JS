function modify(x, obj) {
    x = 10; // Primitive is unaffected outside
    obj.name = "Modified"; // Object is affected outside
  }
  
  let num = 5;
  let person = { name: "Original" };
  modify(num, person);
  
  console.log(num); // Output: 5
  console.log(person.name); // Output: Modified
  