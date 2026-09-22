async function foo() {
  console.log('A');
  await null;
  console.log('B');
}
console.log('start');
foo();
console.log('end');