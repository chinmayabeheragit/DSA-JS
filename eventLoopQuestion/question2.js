Promise.resolve()
  .then(() => {
    console.log("A");
    Promise.resolve().then(() => console.log("B"));
  })
  .then(() => console.log("C"));
