# Pattern (1): Sliding Window

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
>### Time Complexity: O(N)
>### Space Complexity: O(1)

---

# Pattern (2): Two Pointers

```javascript
const pairTargetSum = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) return [left, right];

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
};
```
> ### Time: O(N)
> ### Space: O(1)

---

# Pattern (3): Fast And Slow Pointers

```javascript
const hasCycle = (head) => {
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
};
```
> ### Time: O(N) all nodes of Linked List
> ### Space: O(1)

---

# Pattern (4): Merge Intervals

```javascript
const mergeIntervals = (intervals) => {
    if (intervals.length < 2) return intervals;
  
    intervals.sort((a,b) => a[0] - b[0]);
  
    let fullyMerged = [];
  
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
        fullyMerged.push(start, end)
        start = interval[0]
        end = interval[1]
      }
      
    }
    fullyMerged.push(start, end)
    return fullyMerged  
}
```
> ### Time: O(n * log n) // n number of intervals, and n*logn for built in method sort
> ### Space: O(n) // n intervals in the res array

---

# Pattern (5): Cyclic Sort

```javascript
const cyclicSort = nums => {
    let i = 0;

    while (i < nums.length) {
        const correctIdx = nums[i] - 1; //correct idx location, since this arr is 1 to n inclusive
        if (nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]]; //swap
        } else {
            i += 1;
        }
    }
    return nums;
}
```
> ### Time: O(n) since worst case is we swap a total of n-1 numbers and n-iterations of the loop
> ### Space: O(1)

---

# Pattern (6): In-Place Reversal of Linked List

```javascript
const reverse = head => {
    let curr = head, 
        pre = null;

    while (curr) {
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre;
}
```
> # Time: O(n)
> # Space: O(1)

---

# Pattern (7): Tree Breadth First Search

```javascript
```
> # Time:
> # Space: 

---

# Pattern (8): Tree Depth First Search

```javascript
```
> # Time:
> # Space:

---

# Pattern (9): Two Heaps

```javascript
```
> # Time:
> # Space: 

---

# Pattern (10): Subsets

```javascript
```
> # Time:
> # Space: 

---

# Pattern (11): Modified Binary Search

```javascript
```
> # Time:
> # Space: 

---

# Pattern (12): Bitwise XOR

```javascript
```
> # Time:
> # Space: 

---

# Pattern (13): Top 'K' Elements

```javascript
```
> # Time:
> # Space: 

---

# Pattern (14): K-way merge

```javascript
```
> # Time:
> # Space: 

---

# Pattern (15): Dynamic Programming


```javascript
```
> # Time:
> # Space: 
