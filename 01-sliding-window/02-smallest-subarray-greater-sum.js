/*
Smallest Subarray With a Greater Sum

Given an array of positive numbers and a positive number 'S,' find the length of the smallest 
contigous subarray whose sum is greater than or equal to 'S'. Return 0 if no such subarray exists.

Example 1:
    Input: [2,1,5,2,3,2], S = 7
    Output: 2
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [5,2]

Example 2: 
    Input: [2,1,5,2,8], S = 7
    Output: 1
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [8]

Example 3:
    Input: [3,4,1,1,6], S = 8
    Output: 3
    Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3,4,1] or [1,1,6]
*/

/*
declare start, minLength, and sum
iterate through the array and continue to add element
while loop iterates if end is greater than or equal to S
calculate the minLength based on minlength so far and the current size of window
continue to slide window by removing first element, and moving start
return the minLength or 0 if runningsum was never greater than or equal to S

Time: O(n)
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

