const arr = [2, 4, 6, 7, 8, 9, 10];

let largest = arr[0];
let n = arr.length;

for(let i = 1; i < n ; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}

console.log("largest", largest)

