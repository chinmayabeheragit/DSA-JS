function f1(msg, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, ms);
  });
}

async function f() {
  // runs in parallel (not awaited)
  f1("1", 1000); // 1000

  // waits 600 ms
  await f1("2", 600); 

  // waits another 600 ms
  await f1("3", 600);  // 1200
}

f();
