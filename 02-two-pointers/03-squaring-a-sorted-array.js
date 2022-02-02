/*
Squaring a sorted array

Given a sorted array, create a new array containing squares of all
the numbers of the input array in sorted order.

Example 1:
    Input: [-2,-1,0,2,3]
    Output: [0,1,4,4,9]

Example 2:
    Input: [-3,-1,0,1,2]
    Output: [0,1,1,4,9]
*/

/*
 L
[-2,-1,0,2,3]
           R

declare left, right, result array filled with zeros, 
and i starting at the last index of the given array
iterate through the array as long as left is less than or equal
to the right pointer. 
find the squared number for both left and right pointers
check if the left squared num is less than right squared num
    - true, make result array of i equal to right squared num
      and decrement the right pointer
    - false, make result array of i equal to left squared num
      and increment the left pointer
always decrement i, and return result outside while loop

time: O(n)
space: O(n)
*/

const makeSquares = arr => {
    let left = 0,
        right = arr.length - 1,
        result = Array(arr).fill(0),
        i = arr.length - 1;
    
    while (left <= right) {
        const leftSquared = arr[left] * arr[left];
        const rightSquared = arr[right] * arr[right];

        if (leftSquared < rightSquared) {
            result[i] = rightSquared;
            right--
        } else {
            result[i] = leftSquared;
            left++
        }
        i--
    }
    return result;
}

console.log(makeSquares([-2,-1,0,2,3])) //[0,1,4,4,9]
console.log(makeSquares([-3,-1,0,1,2])) //[0,1,1,4,9]