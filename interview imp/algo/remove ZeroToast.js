function removeZeroToast(arr) {
let j = 0; // for place the non zero

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
        arr[j] = arr[i];
        j++;
    }
}
for(let i = j; i< arr.length; i++){
    arr[i] = 0;
}
return arr;
  }
  let arr = [0, 1, 0, 3, 12];
  let result = removeZeroToast(arr);
  console.log(result);

