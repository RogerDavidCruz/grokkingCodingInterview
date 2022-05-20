/*
Top 'K' Numbers (easy)

Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

Example 1:
    Input: [3, 1, 5, 12, 2, 11], K = 3
    Output: [5, 12, 11]

Example 2:
    Input: [5, 12, 11, -1, 12], K = 3
    Output: [12, 11, 12]
*/

// Approach #1: Use Custom Heap (TODO: class heap)

class Heap {
    constructor (comparator) {
        this.comparator = comparator;
        this.values = [];
        this.length = 0;
    }

    peek() {
        return this.values[this.values.length - 1] || null;
    }

    pop() {
        let popped = this.values.pop()
        this.length--
        this.values.sort(this.comparator)
        return popped;
    }

    push(val) {
        this.values.push(val)
        this.length++
        this.values.sort(this.comparator)
    }
}

const findKLargestNumbers = (nums, k) => {
    const minHeap = new Heap((a,b) => a - b);

    for (let i = 0; i < k; i++) {
        minHeap.add(nums[i]);
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.root()) {
            minHeap.remove();
            minHeap.add(nums[i]);
        }
    }
    return minHeap.heap; 
}

// *********************************************************************************************************

// Approach # 1: Grokking Solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const findKLargestNumbers2 = (nums, k) => {
    const minHeap = new Heap([], null, (a,b) => b - a);

    for (let i = 0; i < k; i++) { // put first 'K' numbers in the min heap
        minHeap.push(nums[i]);
    }

    for (let i = k; i < nums.length; i++) { // go through remaining elements in array, check against root 
        if (nums[i] > minHeap.peek()) {    // of minHeap, if num in array is larger then remove the top root 
            minHeap.pop();                // number and add new number into the min heap
            minHeap.push(nums[i]);
        }
    }

    return minHeap.toArray();   // the heap has the top 'K' numbers, return them in a list
}