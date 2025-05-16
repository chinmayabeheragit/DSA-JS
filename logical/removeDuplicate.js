function removeDuplicate(nums){
 if(nums.length === 0) return 0;
 let i = 0;
 for(let j = 1; j<nums.length; j++){
    if(nums[i] !== nums[j]){
        i++;
        nums[i] = nums[j]
    }
 }   
 return i + 1;
}
const nums = [1, 1, 2, 2, 3, 4, 5, 5];
const k = removeDuplicate(nums);

console.log(`Number of unique elements: ${k}`);
console.log("Modified array:", nums.slice(0, k));