/*
Pair with target sum

Given an array of sorted numbers and a target sum, find a pair in the array whose sum is 
equal to the given target. 

Write a function to return the indices of the two numbers (i.e. the pair) such that they add
up to the given target.


Example 1:
    Input: [1,2,3,4,6], target = 6
    Output: [1,3]
    Explanation: The numbers at index 1 and 3 add up to 6: 2+4 = 6

Example 2:
    Input: [2,5,9,11], target = 11
    Output: [0,2]
    Explnation: The numbers at index 0 and 2 add up to 11: 2+9 = 11
*/

/*
declare left and right pointers
iterate as long as left is less than right
check if the running sum is equal to the target,
    if true return [left, right] indices
if it is not true, do one of two options
    running sum > target, decrement right pointer
    running sum < target, increment left pointer

Time: O(n)
Space: O(1)

L
[1,2,3,4,6], target = 6
         R

sum = 1 + 6 = 7

sum > target
7 > 6           Yes, decrement right
*/
  
const pairTargetSum = (nums, target) => {
    let left = 0,
        right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === target) return [left, right]

        if (sum > target) {
            right--
        } else {
            left++
        }
    }
    return [-1, -1]
}

console.log(pairTargetSum([1,2,3,4,6], 6)) //[1,3]
console.log(pairTargetSum([2,5,9,11], 11)) //[0,2]


/*

STEP BY STEP ITERATION DETAILS:
  
   L
  [1,2,3,4,6], 6
           R
  
    left = 0
    right = 4

  while left < right
  
  1st iteration 
                                          
    sum = arr[left] + arr[right]            L
    sum =  1 + 6                           [1,2,3,4,6], target = 6
    sum =  7                                        R
  
    sum === target
    7 === 6           NO
  
    sum > target
    7 > 6             YES, decrement right

    
    left = 0                                 L
    right = 3                               [1,2,3,4,6], target = 6
    .                                              R

    sum = arr[left] + arr[right]            
    sum = 1 + 4 
    sum = 5
  
    sum === target
    5 === 6             NO

    sum > target
    5 > 6               NO, increment left

    left = 1                                  L
    right = 3                              [1,2,3,4,6], target = 6
    .                                             R

    sum = arr[left] + arr[right]
    sum = 2 + 4
    sum = 6

    sum === target
    6 === 6             YES, return indices  [left, right]
    .                                        [1, 3]
*/
  
  
  
  
  
  
  
  
  
  
  
      