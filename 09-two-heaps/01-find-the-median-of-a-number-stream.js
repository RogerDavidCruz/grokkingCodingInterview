/*
Find the Median of a Number Stream
LC 295

Design a class to calculate the median of a number stream. The class should have the following 
two methods:

1. insertNum(int num): stores the number in the class
2. findMedian(): returns the median of all numbers inserted in the class

If the count of numbers inserted in the class is even, the median will be the average 
of the middle two numbers

Example 1:

1. insertNum(3)
2. insertNum(1)
3. findMedian() -> output: 2
4. insertNum(5)
5. findMedian() -> output: 3
6. insertNum(4)
7. findMedian() -> output: 3.5
*/


/*
Time:  O(logN) for insertNum() due to inserting into heap
       O(1) for findMedian() due to find median from top of heaps
Space: O(n) at any time storing all numbers in heaps
*/

class MedianOfAStream {
    constructor() {
        this.maxHeap = new Heap((a,b) => a - b); //first half of numbers (list of smaller numbers)
        this.minHeap = new Heap((a,b) => b - a); //second half of numbers (list of larger numbers)
    }

    insertNum(num) {
        //checks if max heap is empty or top number is greater than num trying to be inserted
        if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }

        //checks for each heap length to make maxHeap have one element
        //more than minHeap if there is an odd number of elements amongst
        //both heaps
        if (this.maxHeap.length > this.minHeap.length + 1) {
            this.minHeap.push(this.maxHeap.pop()); //move elem from top of maxheap into minheap
        } else if (this.maxHeap.length < this.minHeap.length) {
            this.maxHeap.push(this.minHeap.pop()); //move elem from top of minHeap into maxHeap
        }
    }

    findMedian(){
        //if both heaps have equal length, we calculate median
        //the top of both maxHeap and minHeap divided by 2
        if (this.maxHeap.length === this.minHeap.length) {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
        }
        //if uneven number of elements between both heaps, we keep
        //the median at the top of maxHeap
        return this.maxHeap.peek(); 
    }
}

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

const medianOfAStream = new MedianOfAStream();
medianOfAStream.insertNum(3)
medianOfAStream.insertNum(1)
console.log(`The median is: ${medianOfAStream.findMedian()}`)
// 2 (calculation between both heaps due to even occurence 
//    of elements between both heaps)

medianOfAStream.insertNum(5)
console.log(`The median is: ${medianOfAStream.findMedian()}`) 
// 3 (top of maxHeap, odd occurence of elements between both 
//    heaps)

medianOfAStream.insertNum(4)
console.log(`The median is: ${medianOfAStream.findMedian()}`)
// 3.5 (calcualation between both heaps)
//      maxheap's peek is 3 and minHeap's peek is 4
// 
//      original stream -> 3, 1, 5, 4
//      sorted in two heaps-> 
//      [1, 3] "maxheap"  ---- [4, 5] "minheap"
//      overall between 3 and 4 is 3.5 the median found
