# Pattern: Sliding Window

## Table of Contents

1. [Maximum Sum Subarray of Size K (easy)](#maximum-sum-subarray-of-size-k-easy)
2. [Smallest Subarray with a Greater Sum (easy)](#smallest-subarray-with-a-greater-sum-easy)
3. [Longest Substring with K Distinct Characters (medium)](#longest-substring-with-k-distinct-characters-medium)
4. [Fruits into Baskets](#fruits-into-baskets)
5. [No-repeat Substring (hard)](#no-repeat-substring-hard)
6. [Longest Substring with Same Letters after Replacement (hard)](#longest-substring-with-same-letters-after-replacement-hard)
7. [Longest Subarray with Ones after Replacement (hard)](#longest-subarray-with-ones-after-replacement-hard)
8. [Permutation in a String (hard)](#permutation-in-a-string-hard)
9. [String Anagrams (hard)](#string-anagrams-hard)


## Maximum Sum Subarray of Size K (easy)

>Given an array of positive numbers and a positive number ‘k’, find the **maximum sum** of any **contiguous subarray of size ‘k’**.

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

## Smallest Subarray with a Greater Sum (easy)

>Given an array of positive numbers and a positive number 'S,' find the length of the
smallest contigous subarray whose sum is greater than or equal to 'S'. Return 0 if no 
such subarray exists.

```
Example 1:
    Input: [2, 1, 5, 2, 3, 2], S = 7
    Output: 2
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2]

Example 2:
    Input: [2, 1, 5, 2, 8], S=7 
    Output: 1
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
```

```javascript
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
> ### Time: O(N) two loops O(n + n) but asymptotically O(n)
> ### Space: O(1)

---

## Longest Substring with K Distinct Characters (medium)

>Given a string, find the length of the longest substring in it with no more than K distinct characters.

```
Example 1:
    Input: String="araaci", K=2
    Output: 4
    Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:
    Input: String="araaci", K=1
    Output: 2
    Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:
    Input: String="cbbebi", K=3
    Output: 5
    Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

Example 4:
    Input: String="cbbebi", K=10
    Output: 6
    Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".
```

```javascript
const longestSubstringWithKDistinct = (str, k) => {
    let start = 0,
    freqMap = {},
    maxLength = 0; 

    for (end = 0; end < str.length; end++) {
        const rightChar = str[end]
        if (!(rightChar in freqMap)) {
            freqMap[rightChar] = 1 
        } else {
            freqMap[rightChar] += 1
        }

        while (Object.keys(freqMap).length > k) { 
            const leftChar = str[start];
            freqMap[leftChar] -= 1; // as window slided you decrease char frequency
            if (freqMap[leftChar] === 0)  {
                delete freqMap[leftChar]
            }
            start++                              
        }

        maxLength = Math.max(maxLength, end - start + 1)    
    }

    return maxLength;                               
  }
```

> ### Time: O(N)
> ### Space: 0(M) 

---

## Fruits into Baskets

>

```
```

```javascript
```

>
>

---

