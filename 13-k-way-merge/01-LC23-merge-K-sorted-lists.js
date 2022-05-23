/*
Merge K Sorted Lists - LC 23
https://leetcode.com/problems/merge-k-sorted-lists/

Given an array of 'K' sorted Linked Lists, merge them into one sorted list.

Example 1:
    Input: L1 = [2, 6, 8], L2 = [3, 6, 7], L3 = [1, 3, 4]
    Ouput: 
*/

/*
Algorithm

1. Insert the first element of each array in a Min Heap.
2. Take out the smallest (top) element from the heap and add it to the merged list.
3. Insert the next element of the same list into the heap.
4. Repeat steps 2 and 3 to populate the merged list in sorted order.

Time: O(n * log k) ---- where ‘N’ is the total number of elements in all the ‘K’ input arrays.
Space: O(k) ----- at any time, our min-heap will be storing one number from all the ‘K’ input arrays.
*/

/*
Code in Words

1. insert each root from each list into min heap

2. while min heap is not empty
      current Node is the root node that is popped off the minHeap
      - if result head is null, reassign result Head to result Tail and to current node
      else the next node after resultTail is assigned to Current Node
      and result Tail is result Tail next
      - if the next node is not null, then insert current next node into the min heap

3. return the result Head which contains the list of nodes
*/

// TODO: Incorporate Custom Build Heap

const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const mergeLists = lists => {
  const minHeap = new Heap([], null, ((a, b) => b.value - a.value));

  // put the root of each list in the min heap
  lists.forEach((a) => {
    if (a !== null) {
      minHeap.push(a);
    }
  });

  // take the smallest(top) element form the min-heap and add it to the result
  // if the top element has a next element add it to the heap
  let resultHead = null, 
      resultTail = null;

  while (minHeap.length > 0) {
    const node = minHeap.pop();
    if (resultHead === null) {
      resultHead = resultTail = node;
    } else {
      resultTail.next = node;
      resultTail = resultTail.next;
    }
    if (node.next !== null) {
      minHeap.push(node.next);
    }
  }

  return resultHead;
};

const l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

const l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

const l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

let result = mergeLists([l1, l2, l3]);

process.stdout.write('Here are the elements form the merged list: ');
while (result !== null) {
  process.stdout.write(`${result.value} `);
  result = result.next;
}

