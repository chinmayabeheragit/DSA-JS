function stepA() {
  console.log("A: Start");
  stepB();
  console.log("A: End");
}

function stepB() {
  console.log("B: Start");
  stepC();
  console.log("B: End");
}

function stepC() {
  console.log("C: Executing");
}

stepA();
