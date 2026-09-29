setImmediate(() => {
  console.log('immediate1');
  setImmediate(() => console.log('immediate2'));
});
setTimeout(() => console.log('timeout'), 0);