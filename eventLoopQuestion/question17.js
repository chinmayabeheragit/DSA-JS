setTimeout(() => {
  console.log('timeout');
  process.nextTick(() => console.log('nextTick inside timeout'));
}, 0);
process.nextTick(() => console.log('nextTick top'));