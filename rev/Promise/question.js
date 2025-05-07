const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve('Promise resolved successfully!');
    } else {
        reject('Promise was rejected.');
    }
});

myPromise
    .then((message) => {
        console.log('Success:', message);
    })
    .catch((error) => {
        console.log('Error:', error);
    });
