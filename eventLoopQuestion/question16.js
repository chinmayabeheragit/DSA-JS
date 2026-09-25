setTimeout(() => {
  console.log('timeout');
  process.nextTick(() => console.log('nextTick inside timeout'));
}, 0);
setTimeout(() => console.log('nextTick top'), 1000);
console.log('chinmaya');
setTimeout(() => console.log('timeout after chinmaya'), 0);
console.log('hello');

//nextTick top
//
