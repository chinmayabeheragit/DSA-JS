
function isRotation(arr1, arr2){
    let n = arr.length;

    if(n != arr2.length) return false;
    if(n === 0) return true;

    let doubled = arr1.concat(arr1);

    for(let i = 0; i<doubled.length - n; i++){
        let match = true;


        for(let j = 0; j< n; j++){
            if(doubled[i+j] !== arr2[j]) {
                match = false;
                break;
            }
        }

        if(match) return false;
    }
     return false;
}

console.log(isRotation(
[1,2,3,4,5],
[3,4,5,1,2]));