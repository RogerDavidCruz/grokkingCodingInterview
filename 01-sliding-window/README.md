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


## Maximum Sum Subarray of Size K (easy)

> Given an array of positive numbers and a positive number ‘k’, find the **maximum sum** of any **contiguous subarray of size ‘k’**.

```
Example 1:
    Input: [2, 1, 5, 1, 3, 2], k=3
    Output: 9
    Explanation: Subarray with maximum sum is [5, 1, 3]

Example 2:
    Input: [2, 3, 4, 1, 5], k=2
    Output: 7
    Explanation: Subarray with maximum sum is [3, 4]
```    

```javascript
const maxSumSizeK = (arr, k) => {
    let start = 0,
        maxSum = 0,
        sum = 0;

    for (end = 0; end < arr.length; end++) {
        sum += arr[end];

        if (end + 1 >= k) { // or end >= k - 1
            maxSum = Math.max(maxSum, sum);
            sum -= arr[start];
            start++
        }
    }
    return maxSum;
}
```
>### **Time Complexity: O(N)**
>### **Space Complexity: O(1)**
---

## Smallest Subarray With Given Sum (easy)