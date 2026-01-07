const arr = [0,2,5,7,8,9];

let smallest = arr [0];
let n = arr.length;

for(let i = 1; i < n; i++){
    if(arr[i] < smallest){
        smallest = arr[i];
    }
}
console.log("smallest", smallest);