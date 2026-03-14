{/**
    question = what is the out put order?
    Why: Synchronous first → microtasks (Promise) → macrotasks (setTimeout). Even setTimeout(0) is a macrotask and runs after all microtasks drain.

    */}

    console.log('1');
    setTimeout(() =>
    console.log("2"),0);
    Promise.resolve().then(() => console.log("3"));
    console.log('4');

    // output order is 1,4,3,2
   
