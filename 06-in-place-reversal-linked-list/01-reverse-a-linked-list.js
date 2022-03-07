/*
Reverse a Linked List

Give the head of a singly linked list, reverse the linked list. Write a function 
to return the new head of the reversed Linked List.

Example 1: 

head -> 2 -> 4 -> 6 -> 8 -> 10 -> null      "original list"
null <- 2 <- 4 <- 6 <- 8 <- 10 <- head      "reversed list"

Pseudo/Notes

current will point to previous, before moving
previous always poin to previous node that have processed

Time: O(N)
Space: O(1)

*/

class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Abridge version 
const reverse = head => {
    let curr = head, pre = null;

    while (curr) {
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(head)
console.log(reverse(head))

/*

Original Input Linked List 

Node {
  value: 2,
  next: Node { value: 4, next: Node { value: 6, next: [Node] } }
}

Solution - Ouput Reversed Linked List 

Node {
  value: 10,
  next: Node { value: 8, next: Node { value: 6, next: [Node] } }
}

*/

// Fully Written Out Original Solution

function reverseOriginal(head) {
    let current = head;
    let previous = null;

    while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous
}