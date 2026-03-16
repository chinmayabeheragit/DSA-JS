async function fetchData(){
    return "data fetched";

}

fetchData().then(console.log);

// output will be "data fetched" because fetchData is an async function which returns a promise that resolves to "data fetched". We can use .then to log the resolved value of the promise.