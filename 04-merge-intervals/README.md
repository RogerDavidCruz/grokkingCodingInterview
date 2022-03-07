# Pattern: Merge Intervals

## Table of Contents

- [x] 1. [Merge Intervals (medium): LC 56](#Merge-Intervals-(medium):-LC-56)
- [ ] 2. [Insert Interval (medium): LC 57](#Insert-Interval-(medium):-LC-57)
- [ ] 3. [Intervals Intersection (medium): LC 986](#Intervals-Intersection-(medium):-LC-986)
- [ ] 4. [Conflicting Appointments (medium): LC 252](#Conflicting-Appointments-(medium):-LC-252)
- [ ] 5. [Problem Challenge 1: LC 253](#Problem-Challenge-1:-LC-253)
- [ ] 6. [Problem Challenge 2: new (​link​)](#Problem-Challenge-2:-new-(​link​))
- [ ] 7. [Problem Challenge 3: LC 759](#Problem-Challenge-3:-LC-759)

## Merge Intervals (medium): LC 56

>Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

```
Example 1:
    Intervals: [[1,4], [2,5], [7,9]]
    Output: [[1,5], [7,9]]
    Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].
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
```
> ### Time: O(n * logn) // n number of intervals, and n*logn for built in method sort
> ### Space: O(n) // n intervals in the res array

---

