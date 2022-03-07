/*
Merge Intervals

Problem Statement #
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
one [1,5].
*/


/*
[[1,4], [2,5], [7,9]]

1-----4
   2-----5
            7----9

sort by start times, 
smallest start between two overlaping intervals
largest end between two overlaping intervals 

1---5 7---9

res [[1,5], [7,9]]

time: O(n * logn) // n number of intervals, and n*logn for built in method sort
space: O(n) // n intervals in the res array

*/

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