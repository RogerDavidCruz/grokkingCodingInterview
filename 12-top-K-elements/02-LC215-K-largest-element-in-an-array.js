/*
Kth smallest number

Given an unsorted array of numbers, find Kth smallest number in it.

Please note that it is the Kth smallest number in the sorted order, 
not the Kth distinct element.

Example 1:
    Input: [1, 5, 12, 2, 11, 5], K = 3
    Output: 5
    Explanation: The 3rd smallest number is '5', as the first two 
    smaller numbers are [1, 2].

Example 2:
    Input: [1, 5, 12, 2, 11, 5], K = 4
    Output: 5
    Explanation: The 4th smallest number is '5', as the first three 
    small numbers are [1, 2, 5].

Example 3:
    Input: [5, 12, 11, -1, 12], K = 3
    Output: 11
    Explanation: The 3rd smallest number is '11', as the first two 
    small numbers are [5, -1].    
*/

// TODO: Custom Class Heap and LEETCODE version 
// https://leetcode.com/problems/kth-largest-element-in-an-array/

const findKSmallest = (nums, k) => {
    const maxHeap = new Heap();
    for (let i = 0; i < k; i++) {
        maxHeap.push(nums[i]);
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.push(nums[i]);
        }
    }
    return maxHeap.peek();
}

/*
Time: O(n * logK)
Space: O(k)

If the number in array at i is smaller than the top root node of maxHeap, pop
and add smaller number, in the end, the kth smallest num would be the root node
of the maxHeap.

*********************************************************************************

General Pattern:

Function ()
    heap
    for (push into heap)
    for (num vs heap root)
        pop
        push
    return heap.peek.toArray    
*/

