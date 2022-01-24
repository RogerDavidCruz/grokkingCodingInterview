/*
Maximum Sum Subarray of Size K

Given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray of size 'K'.

Example 1:

Input: [2,1,5,1,3,2], k = 3
Output: 9
Explanation: Subarray with maximum sum is [5,1,3]

Example 2: 

Input: [2,3,4,1,5], k = 2
Output: 7
Explanation: Subarray with maximum sum is [3,4]
*/

/*
declare start, maxSum, and runningSum 
iterate the array while increasing runningSum
once the window meets the size of the window, calculate maxSum, 
    1. subtract the element going out of sliding window
    2. add new element getting included in sliding window
continue to slide the window and return maxSum

Time: O(n)
Space: O(1)
*/

const maxSumSizeK = (arr, k) => {
    let start = 0,
        maxSum = 0,
        sum = 0;

    for (end = 0; end < arr.length; end++) {
        sum += arr[end];

        if (end >= k - 1) {
            maxSum = Math.max(maxSum, sum);
            sum -= arr[start];
            start++
        }
    }
    return maxSum;
}

console.log(maxSumSizeK([2,1,5,1,3,2], 3)) //9
console.log(maxSumSizeK([2,3,4,1,5], 2)) //7