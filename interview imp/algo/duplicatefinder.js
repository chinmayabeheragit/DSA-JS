function removeDuplicates(nums){
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }

    }
    return i + 1;
}
const nums = [5,5,1,9, 8, 8, 6, 4, 3, 2, 1];
const k = removeDuplicates(nums);  
console.log(k); // Output: 6
console.log(nums.slice(0, k)); // Output: [1, 2, 3, 4, 5, 6]