/*
Linked List Cycle

Give the head of a singly linked list, write a function to determine if the 
LinkedList has a cycle in it or not.

Example 1:  LinkedList with cycle
            head -> 1 - 2 - 3 - 4 - 5 - 6 --|
                        ^|__________________|

Example 2:  LinkedList without cycle
            head - 2 - 4 - 6 - 8 - 10 - null
*/

/*
Pseudo Code

Declare slow pointer to head, and fast pointer to head
Iteratre the LL as long as fast pointer is not equal to null
and fast.next not null (while loop)
Fast is assigned two steps faster
slow is assigned one step
Check if once slow and fast meet then return true
Othersie falase outside while loop

Time: O(n) all nodes of LL
Space: O(1) constant
*/

const hasCycle = head => {
    let slow = head,
        fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) {
            return true;        // found the cycle
        }
    }
    return false;
}

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4)

console.log(hasCycle(head))// false

head.next.next.next = head.next.next
console.log(hasCycle(head)) //true
