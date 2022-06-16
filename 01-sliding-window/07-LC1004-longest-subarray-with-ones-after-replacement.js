// Longest Subarray with ones after replacement
// Sliding Window - LC 1004

/*
Given an array containing 0s and 1s, if you are allowed to replace 
no more than 'k' 0s with 1s find the length of the longest contiguous 
subarray having all 1s.

Example 1:
    Input: Array = [0,1,1,0,0,0,1,1,0,1,1], k = 2
    Output: 6
    Explanation: Replace the '0' at index 5 and 8 to have the longest 
                 contiguous subarray of 1s having length 6 
                 [0,1,1,0,0,1,1,1,1,1,1]
                            ____________
*/

const lengthOfLongestSubstring = (arr, k) => {
  let windowStart = 0,
    maxLength = 0,
    maxOnesCount = 0;
  // extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) maxOnesCount += 1;

    // if remaining 0s are more than 'K', we must shrink window
    if (windowEnd - windowStart + 1 - maxOnesCount > k) {
      if (arr[windowStart] === 1) maxOnesCount -= 1;
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

/*
Algorithm - sliding window technique

Time: O(n) where n is the count of numbers in the input array
Space: O(1)
*/
