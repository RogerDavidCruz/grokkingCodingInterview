# Pattern: Fast and Slow Pointers

>Linked List created using a Node class and an instance of this class with sub objects.

```javascript
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
```

## Table of Contents

1. [x] [LinkedList Cycle (easy): LC 141](<#LinkedList-Cycle-(easy):-LC-141>)
2. [x] [Start of LinkedList Cycle (medium): LC 142](<#Start-of-LinkedList-Cycle-(medium):-LC-142>)
3. [x] [Happy Number (medium): LC 202](<#Happy-Number-(medium):-LC-202>)
4. [x] [Middle of the LinkedList (easy): LC 876](<#Middle-of-the-LinkedList-(easy):-LC-876>)
5. [ ] [Problem Challenge 1: LC 234](#Problem-Challenge-1:-LC-234)
6. [ ] [Problem Challenge 2: LC 143](#Problem-Challenge-2:-LC-143)
7. [ ] [Problem Challenge 3: LC 457](#Problem-Challenge-3:-LC-457)

## Linked List Cycle

>Give the head of a singly linked list, write a function to determine if the LinkedList has a cycle in it or not.

```
Example 1:  LinkedList with cycle
            head -> 1 - 2 - 3 - 4 - 5 - 6 --|
                        ^|__________________|

Example 2:  LinkedList without cycle
            head - 2 - 4 - 6 - 8 - 10 - null
```

```javascript
const hasCycle = (head) => {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true; // found the cycle
    }
  }
  return false;
};
```
> ### Time: O(N) all nodes of LL
> ### Space: O(1)

---

## Start of Linked List Cycle

>Given the head of a singly linkedlist that contains a cycle, write a function to find the starting node of a the cycle.

```
                    cycle start
Example 1:               v
            head -> 2 -> 3 -> 4 -> 5 -> 6--|
                         ^|________________|

                         cycle start
Example 2:                    v
            head -> 2 -> 3 -> 4 -> 5 -> 6--|
                              ^|___________|

               cycle start
Example 3:          v
            head -> 2 -> 3 -> 4 -> 5 -> 6--|
                    ^|_____________________|
```

```javascript
const findCycleStart = (head) => {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
```
> ### Time:
> ### Space: 

---

## Happy Number (medium): LC 202

>Any number will be called a happy number if, after repeatedly replace it with a number equal
to the sum of the square of all of its digits, leads us to the number '1'. All other (not happy)
numbers will never reach '1'. Instead, they will be stuck in a cycle of numbers which does not
include '1'.

```
Example 1:  Input: 23, Output: True 
            Explanation: Here are the steps to find out that 23 is a happy number

            1. 2^2 + 3^2 = 4 + 9 = 13
            2. 1^2 + 3^2 = 1 + 9 = 10
            3. 1^2 + 0^2 = 1 + 0 = 1

Example 2:  Input 12, Ouput: False 
            Explanation: process get stuck in cycle of numbers not '1'
            89 -> 145 -> 42 -> 20 -> 4 -> 16 -> 37 -> 58 -> 89
```

```javascript
const findHappyNumber = num => {
    let slow = num,
        fast = num;
    
    while (true) {
        slow = healperSquareSum(slow);
        fast = healperSquareSum(healperSquareSum(fast));
        if (slow === fast) {
            break;
        }
    }
    return slow === 1;
}

const healperSquareSum = num => {
    let sum = 0;
    while (num > 0) {
        digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num/10);
    }
    return sum;
}
```
> ### Time: O(logN) based on number of digits, and next number < 9^2M
> ### Space: O(1)

---