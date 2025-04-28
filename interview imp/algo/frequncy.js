function countFrequency(arr){
    let frequency = {};
    for(let i =0; i<arr.length; i++){
        let num = arr[i];
        if(frequency[num]){
            frequency[num] += 1;
    }else{
            frequency[num] = 1;
        }
    }
    return frequency;
}
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequency = countFrequency(arr);
console.log(frequency); // Output: { '1': 1, '2': 2, '3': 3, '4': 4 }