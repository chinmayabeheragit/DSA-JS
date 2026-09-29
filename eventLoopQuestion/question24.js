console.log('1');

setTimeout(() => console.log('2'), 0);

setImmediate(() => console.log('3'));

process.nextTick(() => console.log('4'));

async function foo() {
  console.log('5');
  await null;
  console.log('6');
}
foo();

Promise.resolve().then(() => console.log('7'));

queueMicrotask(() => console.log('8'));

console.log('9');

//1,9,7,4,8,2,5,6,3