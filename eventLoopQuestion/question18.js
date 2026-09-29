async function foo() {
  console.log('A');
  await null;
  console.log('B');
  await null;
  console.log('C');
}
foo();
console.log('D');