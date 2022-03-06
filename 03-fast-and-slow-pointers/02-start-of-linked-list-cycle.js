/*
Start of Linked List Cycle

Given the head of a singly linkedlist that contains a cycle, write a function
to find the starting node of a the cycle.

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
*/

/*
declare slow to head, fast to head
    while loop iterate if fast isn't null and fast.next isn't null
        move slow 1 next at a time
        move fast 2 nexts at a time
            check if slow equals fast
                then re-assign slow to head
                while loop iterate if slow doesn't equal fast
                    then move slow 1 next
                    move fast 1 next
                    same increments until they both meet
            return slow pointer within condition when slow equals fast pointer
    return null outside the main top level while loop

Time: O(n) to find start of cycle, 'N' nodes
Space: O(1)
*/

const findCycleStart = head => {
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
}

class Node {
    constructor (value, next = null) {
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

head.next.next.next.next.next.next = head.next.next;
console.log(findCycleStart(head).value);

head.next.next.next.next.next.next = head.next.next.next;
console.log(findCycleStart(head).value);

head.next.next.next.next.next.next = head;
console.log(findCycleStart(head).value);