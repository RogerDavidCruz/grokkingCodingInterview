/* Roger
Triplet Sum Close to Target (medium)

Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.
*/

/*
  i  L
[-2, 0, 1, 2], target=2
           R

let smallestDifference = Inifinity

sorting the nums initially

runningDifference = target - i - Left - Right

if smallestDifference = 0
  triplet found

otherwise keep track of runningDifference
  compare the smallestDifference so far
  against the runningDifference in curr iteration

  reassign - smallestDifference (if)

return smallestDifference

time: O(n * logN * n) ---> O(n^2)
space: O(n)
*/

const tripletSumClosest = (nums, target) => {
    nums.sort((a,b) => a - b);
    let smallestDiff = Infinity;
  
    for (let i = 0; i < nums.length; i++) {
      let left = i + 1,
          right = nums.length - 1;
  
      while (left < right) {
        let runningDiff = target - nums[i] - nums[left] - nums[right];
        //currsum = +++
  
        if (Math.abs(runningDiff) === 0) return target
  
        //check compare smallestdiff and running diff
        
        //curr - target < bestsum - target
        if (Math.abs(runningDiff) < Math.abs(smallestDiff)) {
          smallestDiff = runningDiff
        }
        //check if sum < target & move pointer
        //check if sum > target
  
        if (runningDiff > 0) {
          left++
        } else {
          right--
        }
  
  
      }
      return target - runningDiff
    }
  }
  
  //console.log(tripletSumClosest([-2, 0, 1, 2], 2)) //1
  //console.log(tripletSumClosest([-3, -1, 1, 2], 1)) //0
  