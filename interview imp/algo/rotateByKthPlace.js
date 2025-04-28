function rotateArray (arr, k){
    const n = arr.length;
    k = k%n; // handle if k > n

    let rotated = [];

    // push the last k elements to the rotated array
    for(let i = n-k; i<n; i++){
        rotated.push(arr[i]);
    }
    // push the first n-k elements to the rotated array
    for(let i = 0; i<n-k; i++){
        rotated.push(arr[i]);
    }
    return rotated;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(arr, k);
console.log(rotatedArray); // Output: [5, 6, 7, 1, 2, 3, 4]