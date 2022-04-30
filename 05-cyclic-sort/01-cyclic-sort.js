/*
Cyclic Sort

We are given an array containing n objects. Each object, when created, was assigned a unique 
number from the range 1 to n based on their creation sequence. This means that the object with 
sequence number 3 was created just before the object with sequence number 4.

Write a function to sort the objects in-place on their creation sequence number in O(n)
and without using any extra space. For simplicity, let’s assume we are passed an integer 
array containing only the sequence numbers, though each number is actually an object.

Example 1:
    Input: [3, 1, 5, 4, 2]
    Output: [1, 2, 3, 4, 5]

Example 2:
    Input: [2, 6, 4, 3, 1, 5]
    Output: [1, 2, 3, 4, 5, 6]

Example 3:
    Input: [1, 5, 6, 4, 3, 2]
    Output: [1, 2, 3, 4, 5, 6]
*/

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

/*
Time: O(n) since worst case is we swap a total of n-1 numbers and n-iterations of the loop
Space: O(1)

Algorithm
    - initialize i 
    - iterate the length of the array
    - declare the correct Idx "j" location where a value nums[i] should be
    - if the element is in the wrong place, then swap elements on where it should be
    - otherwise increase i iterator
    - return newly sorted in place array
*/

console.log(cyclicSort([3, 1, 5, 4, 2])) // [1, 2, 3, 4, 5]
console.log(cyclicSort([2, 6, 4, 3, 1, 5])) // [1, 2, 3, 4, 5, 6]
console.log(cyclicSort([1, 5, 6, 4, 3, 2])) // [1, 2, 3, 4, 5, 6]