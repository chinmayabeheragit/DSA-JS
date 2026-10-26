// given an array and an index k, retrieve the element stored at that index

//consider = [1, 2, 3, 4, 5, 6, 7]
//for k = 2. the required element is 
//arr[2] = 3

//algo
//check wheather l lies between 0 and N - 1.
//use index K to directly locate the required element
// srtrun the value stored at that index

// time complexity = 0(1) because the element address is calculated directly
// space complexity = 0(1) because we are not using any extra space

function findElement(arr, k){
    return arr[k];
}

arr = [1, 2, 3, 4, 5, 6, 7];
k = 2;
console.log(findElement(arr,k));