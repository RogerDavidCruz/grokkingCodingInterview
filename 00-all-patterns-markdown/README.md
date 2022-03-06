# Pattern: Sliding Window

```javascript
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return maxSum;
}
```

### Maximum Sum Subarray of Size K

```
Problem Statement #
Given an array of positive numbers and a positive number ‘k’,
find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
```

```javascript
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add next element
    // slide the window, we don't slide if not the required window size of 'k'
    if (windowEnd - windowStart + 1 >= k) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract element going out
      windowStart += 1; // slide window ahead
    }
  }
  return maxSum;
}

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));
```

### Smallest Subarray Greater 

```javascript
/*
Given an array of positive numbers and a positive number 'S,' find the length of the smallest 
contigous subarray whose sum is greater than or equal to 'S'. Return 0 if no such subarray exists.

Example 1:
    Input: [2,1,5,2,3,2], S = 7
    Output: 2
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [5,2]

Time: O(n) two loops O(n + n) but asymptotically O(n)
Space: O(1)
*/

const smallestLenSum = (arr, s) => {
    let start = 0, sum = 0, minLen = Infinity;

    for (end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum >= s) {
            minLen = Math.min(minLen, end - start + 1);
            sum -= arr[start];
            start++
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log(smallestLenSum([2,1,5,2,3,2], 7)) //2
console.log(smallestLenSum([2,1,5,2,8], 7)) //1
console.log(smallestLenSum([3,4,1,1,6], 8)) //3
```

### Longest Substring With Maximum K Distinct Characters

```javascript
/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

time: O(n)
space: 0(m) 
*/

const longestSubstringWithKDistinct = (str, k) => {
    let start = 0,
    freqMap = {},
    maxLength = 0; //this

    for (end = 0; end < str.length; end++) {
        const rightChar = str[end]
        if (!(rightChar in freqMap)) {
            freqMap[rightChar] = 1 
        } else {
            freqMap[rightChar] += 1
        }

        while (Object.keys(freqMap).length > k) { //this
            const leftChar = str[start];
            freqMap[leftChar] -= 1; // as window slided you decrease char frequency
            if (freqMap[leftChar] === 0)  {
                delete freqMap[leftChar]
            }
            start++                              //this
        }

        maxLength = Math.max(maxLength, end - start + 1)    
    }

    return maxLength;                               //this
  }
  
  console.log(longestSubstringWithKDistinct("araaci", 2)) // 4
  console.log(longestSubstringWithKDistinct("araaci", 1)) // 2
  console.log(longestSubstringWithKDistinct("cbbebi", 3)) // 5
  console.log(longestSubstringWithKDistinct("cbbebi", 10)) // 6
```