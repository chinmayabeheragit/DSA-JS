let x = 10;

{
  let x = 20; // Shadows the outer x
  console.log(x); // Output: 20
}

console.log(x); // Output: 10
