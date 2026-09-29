async function delay() {
  console.log('start');
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log('end');
}
delay();
console.log('sync');