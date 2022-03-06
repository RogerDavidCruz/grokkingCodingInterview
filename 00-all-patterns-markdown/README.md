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

Time: O(N)
Space: O(1)
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

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])); // 7
```

### Smallest Subarray Greater 

```
Given an array of positive numbers and a positive number 'S,' find the length of the
smallest contigous subarray whose sum is greater than or equal to 'S'. Return 0 if no 
such subarray exists.

Example 1:
    Input: [2,1,5,2,3,2], S = 7
    Output: 2
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [5,2]

Example 2:
    Input: [2, 1, 5, 2, 8], S=7 
    Output: 1
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Time: O(n) two loops O(n + n) but asymptotically O(n)
Space: O(1)
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

### Longest Substring With Maximum K Distinct Characters

```
Given a string, find the length of the longest substring in it with no more than 
K distinct characters.

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

Time: O(n)
Space: O(m) 
```

```javascript
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

### Fruits Into Baskets

```
```

```javascript
```

### Longest Substring With Distinct Characters

```
Given a string, find the length of the longest substring, 
which has all distinct characters.

Example 1:
    Input: String="aabccbb"
    Output: 3
    Explanation: The longest substring with distinct characters is "abc".

Example 2:
    Input: String="abbbb"
    Output: 2
    Explanation: The longest substring with distinct characters is "ab".

Time: O(N)
Space: O(1) since there is a set 26 distinct english letters to fit in the hashmap
```

```javascript
const longestSubString = string => {
    let start = 0,
        maxLength = 0,
        charIdxMap = {};
  
    for (end = 0; end < string.length; end++) {
        const rightChar = string[end];
      if (rightChar in charIdxMap) {
        windowStart = Math.max(windowStart, charIdxMap[right] + 1)
      } 

      charIdxMap[rightChar] = windowEnd;

      maxLength = Math.max(maxLength, end - start + 1);  
    }
  
    return maxLength;
  }
  
  console.log(longestSubString("aabccbb")) //3
  console.log(longestSubString("abbbb")) //2
  console.log(longestSubString("abcdeafjyk")) //9
```

# Pattern: Two Pointers

### Pair With Target Sum
```
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

Time: O(N)
Space: O(1)
```

```javascript
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
```

# Pattern: Fast and Slow Pointers

```
Linked List created using a Node class and an instance of this class with sub objects.
```

```javascript
class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
```

### Linked List Cycle

```
Give the head of a singly linked list, write a function to determine if the 
LinkedList has a cycle in it or not.

Example 1:  LinkedList with cycle
            head -> 1 - 2 - 3 - 4 - 5 - 6 --|
                        ^|__________________|

Example 2:  LinkedList without cycle
            head - 2 - 4 - 6 - 8 - 10 - null

Time: O(N) all nodes of LL
Space: O(1)
```

```javascript
const hasCycle = head => {
    let slow = head,
        fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) {
            return true; // found the cycle
        }
    }
    return false;
}
```

### Start of Linked List Cycle

```
Given the head of a singly linkedlist that contains a cycle, write a function
to find the starting node of a the cycle.

                    cycle start
Example 1:               v
            head -> 2 -> 3 -> 4 -> 5 -> 6--|
                         ^|________________|

                         cycle start
Example 2:                    v
            head -> 2 -> 3 -> 4 -> 5 -> 6--|
                              ^|___________|

               cycle start
Example 3:          v
            head -> 2 -> 3 -> 4 -> 5 -> 6--|
                    ^|_____________________|
```

```javascript
const findCycleStart = head => {
    let slow = head,
        fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}
```

# Pattern: Merge Intervals

```
```

### Merge Intervals

```
Given a list of intervals, merge all the overlapping intervals to product
a list that has only mutually exclusive intervals.

Example 1:
    Intervals: [[1,4], [2,5], [7,9]]
    Output: [[1,5], [7,9]]
    Explanation: Since the first two intervals [1,4] and [2,5] overlap, 
                 we merged them into one [1,5].

Example 2:
    Intervals: [[6,7], [2,4], [5,9]]
    Output: [[2,4], [5,9]]
    Explanation: Since the intervals [6,7] and [5,9] overlap, 
                 we merged them into one [5,9].

Time: O(N * logN)
Space: O(N)
```

```javascript
const mergeIntervals = intervals => {
    if (intervals.length < 2) return intervals;
  
    intervals.sort((a,b) => a[0] - b[0]);
  
    let fullYMerged = [];
  
  // start arr[0].start
  // end arr[0].end
  
    for (let i = 1; i < intervals.length; i++) {
      let interval = intervals[i];
  
      // b.start < a.end
        //merge
      if (interval[0] <= end) { // interval.start <= end {
        // end = Math.max(end, end)
        end = Math.max(interval[1], end);
      } else {
        fullYMerged.push(start, end)
        start = interval[0]
        end = interval[1]
      }
      
    }
    fullyMerged.push(start, end)
    return fullyMerged
    
  }
  
  console.log(mergeIntervals([[1,4], [2,5], [7,9]])) //[[1,5], [7,9]]
```