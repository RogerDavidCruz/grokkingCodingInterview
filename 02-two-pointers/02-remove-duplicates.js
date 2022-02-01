/*
Remove Duplicates

Given an array of sorted numbers, remove all duplicates from it. You
should not use any extra space; after removing the duplicates in-place
return the length of the subarray that has no duplicate in it.

Example 1:
    Input: [2,3,3,3,6,9,9]
    Output: 4
    Explanation: The first four elements after removing the duplicates
    will be [2,3,6,9]

Example 2:
    Input: [2,2,2,11]
    Ouput: 2
    Explanation: The first two elements after removing the duplcates
    will be [2,11]
*/

/*
declare next non duplicate variable and i
iterate the array as long as i is less than array's length
check if element before next non duplicate pointer does not equal to 
the element at array of i
    - if true, then reassign value of array of non duplicate pointer
    to the array of i value. ALSO move up non-duplicate pointer by 1
continue to increase i after every iteration
return next non duplicate (this will be the same as array length
    of all the numbers that are unique, since arrays are zero indexed)

Time: O(n)
Space: O(1)

*/

const removeDuplicates = nums => {
    let next = 1,
        i = 1;
    
    while (i < nums.length) {
       if (nums[next - 1] !== nums[i]) {
           nums[next] = nums[i]
           next++
       }
       i++
    }
    return next
}

console.log(removeDuplicates([2,3,3,3,6,9,9])) //4
console.log(removeDuplicates([2,2,2,11])) //2