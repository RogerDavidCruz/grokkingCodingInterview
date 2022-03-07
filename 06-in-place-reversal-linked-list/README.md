# Pattern: In-place Reversal of a LinkedList

> Current node will point to previous, before moving <br>
> Previous always point to previous node that have been processed

```javascript
class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(head)

// Original Input Linked List 

Node {
  value: 2,
  next: Node { value: 4, next: Node { value: 6, next: [Node] } }
}
```

## Table of Contents
1. [x] [Reverse a Linked List (easy): LC 206](#Reverse-a-Linked-List-(easy):-LC-206)
2. [ ] Reverse a Sub-list (medium): LC 92
3. [ ] Reverse every K-element Sub-list (medium): LC 25
4. [ ] Problem Challenge 1: new (​link​)
5. [ ] Problem Challenge 2: LC 61

## Reverse a Linked List (easy): LC 206

>Give the head of a singly linked list, reverse the linked list. Write a function to return the new head of the reversed Linked List.

```
Example 1: 
    head -> 2 -> 4 -> 6 -> 8 -> 10 -> null      "original list"
    null <- 2 <- 4 <- 6 <- 8 <- 10 <- head      "reversed list"
```

```javascript
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
```
> ### Time: O(N)
> ### Space: O(1)

---
