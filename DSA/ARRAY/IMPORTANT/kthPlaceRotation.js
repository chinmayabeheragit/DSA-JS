

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}


function two(arr, k) {
    let n = arr.length;
    if(n === 0) return arr;

    k = k % n; // handle k > n  means if the rotation number is greater then the eliments inside the array

    reverse(arr, 0, n-1); // [7, 6, 5, 4, 3, 2, 1]

    reverse(arr, 0, k-1); //[5, 6, 7, 4, 3, 2, 1]


    reverse(arr, k , n-1); //[5, 6, 7, 1, 2, 3, 4]


    return arr;
}

const arr = [1,2,3,4,5,6,7];
two(arr,3);
console.log(arr);

