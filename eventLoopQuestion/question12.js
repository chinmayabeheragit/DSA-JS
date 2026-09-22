console.log('sync1');

setTimeout(() => console.log('timeout'), 0);

setImmediate(() => console.log('immediate'));

process.nextTick(() => console.log('nextTick1'));

Promise.resolve().then(() => {
  console.log('promise1');
  process.nextTick(() => console.log('nextTick2'));
});

queueMicrotask(() => console.log('microtask'));

console.log('sync2');