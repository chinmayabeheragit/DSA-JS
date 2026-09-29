async function foo() {
  try {
    await Promise.reject('err');
  } catch (e) {
    console.log('caught', e);
  }
  console.log('after catch');
}
foo();
process.nextTick(() => console.log('nextTick'));
console.log('sync');