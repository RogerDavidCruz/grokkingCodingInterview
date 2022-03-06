# Pattern: Sliding Window

## Table of Contents

1. [Maximum Sum Subarray of Size K (easy)](#maximum-sum-subarray-of-size-k-easy)
2. [Smallest Subarray With Given Sum (easy)](#smallest-subarray-with-given-sum-easy)
3. [Longest Substring with K Distinct Characters (medium)](#longest-substring-with-k-distinct-characters-medium)
4. [Fruits into Baskets (medium)](#fruits-into-baskets-medium)
5. [No-repeat Substring (hard)](#no-repeat-substring-hard)
6. [Longest Substring with Same Letters after Replacement (hard)](#longest-substring-with-same-letters-after-replacement-hard)
7. [Longest Subarray with Ones after Replacement (hard)](#longest-subarray-with-ones-after-replacement-hard)
8. [Permutation in a String (hard)](#permutation-in-a-string-hard)
9. [String Anagrams (hard)](#string-anagrams-hard)


### Maximum Sum Subarray of Size K (easy)

```
**Problem Statement**:
Given an array of positive numbers and a positive number ‘k’,
find the **maximum sum** of any **contiguous subarray of size ‘k’**.

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
const max_sub_array_of_size_k = function (k, arr) {
  // Input: an array of numbers and k (subarray size limit)
  // Output: max sum (number)

  // Needs: windowStart, sum, maxSum

  let windowStart = 0;
  let sum = 0;
  let maxSum = 0;

  // Loop through array
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add numbers to sum
    let rightChar = arr[windowEnd];
    sum += rightChar;

    // Slide the window if window gets bigger than or equal to the k limit
    if (windowEnd - windowStart + 1 >= k) {
      // Update maxSum
      maxSum = Math.max(maxSum, sum);

      // Remove traces of windowStart as you slide the window forward
      let leftChar = arr[windowStart];
      windowStart++;
      sum -= leftChar;
    }
  }

  return maxSum;
};
```

### Time Complexity: O(N)

### Space Complexity: O(1)

---

## Smallest Subarray With Given Sum (easy)