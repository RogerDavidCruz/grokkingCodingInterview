/*
Roger

Triplets with Smaller Sum (medium)

Given an array arr of unsorted numbers and a target sum, count all triplets in it such 
that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 
Write a function to return the count of such triplets.

Example 1:
  Input: [-1, 0, 2, 3], target=3 
  Output: 2
  Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

Example 2:
  Input: [-1, 4, 2, 1, 3], target=5 
  Output: 4
  Explanation: There are four triplets whose sum is less than the target: 
  [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
*/


/*
time: O(n * logN * n) ---> O(n^2)
space: O(n)
*/

const tripletSmallerSum = (nums, target) => {
    nums.sort((a,b) => a - b);
    let count= 0;
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        if (nums[i] + nums[left] + nums[right] < target) {
          count += right - left
          left++
        } else {
          right--
        }
      }
    }
    return count;
  }
  
  console.log(tripletSmallerSum([-1, 0, 2, 3], 3 )) //2
  console.log(tripletSmallerSum([-1, 4, 2, 1, 3], 5 )) //4

//********************************************************************************************************

  //LEETCODE VERSION
  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumSmaller = (nums, target) => {
  nums.sort((a,b) => a - b);
  let count= 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
};

//Extra Notes:

      //INSIDE while loop as left < right
        //check if element at i, element at left, element at right pointer
        //added up are less than target
        //if they are, increase the count by subtracting right and left pointers <-- WHY?
        //move up the left pointer, to check another larger value
        //else move the right pointer down, since the 3sum was larger or equal than target

/* Two pointer approach - Step by Step:

1. sort nums
2. declare count
3. For loop i iterator up to 2 before end array.length
4. Declare left a i + 1
5. Declare right as array.length - 1
6. While oop as left < right
7. If element at i, element at left, element at right all added up is less than target then...
  7a. increase count by subtracting right and left pointers, and increase left pointer up by one only when 3sum smaller than target
  7b. else decrease right pointer
8. return count

*/

/*
Pseudo Notes:

array of int, target int
output: int

  0. 1
  i  L
[-1, 0, 2, 3], target=3 
           R
           2

  i  L. R
[-1, 0, 3]
sum = 2       2 < 3 yes, count + 1

[0,2,3]
sum = 5        5 < 3 no, count not increased?


sort the array
count 

for, iterate array with I , L, R 
while, left < right 
is I + left + right < target value
  count += 1
  increment left
    otherwise decrement right

return count

*/