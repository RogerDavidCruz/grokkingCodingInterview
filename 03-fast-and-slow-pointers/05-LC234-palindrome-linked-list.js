/*
Palindrome Linked List - LC234

Given the head of a Singly LinkedList, write a method to check if 
the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList 
should be in the original form once the algorithm is finished. 
The algorithm should have O(N) time complexity where ‘N’ is the 
number of nodes in the LinkedList.

Example 1: 
    Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
    Output: true

Example 2:
    Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
    Output: false

*/

//Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
    if (!head || !head.next) return true;

    let slow = head, 
        fast = head;

    while (fast && fast.next) {
        slow = slow.next,
        fast = fast.next.next;
    }

    headSecondHalf = reverse(slow);
    copyHeadSecondHalf = headSecondHalf;

    while (head && headSecondHalf) {
        if (head.val !== headSecondHalf.val) return false;
        head = head.next, 
        headSecondHalf = headSecondHalf.next;
    }
    reverse(copyHeadSecondHalf);
    if (!head || !headSecondHalf) return true;
    return false;
};

const reverse = head => {
    let prev = null;
    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

/*
Algorithm

1. Use Fast and Slow pointers to find Middle of LL
2. Reverse the Second Half of LL
3. Compare first half with reversed second half LL to represent palindrome
4. Reverse second half of LL again to revert and bring LL back to original form

Time: O(n) where n is number of nodes in linked list
Space: O(1)
*/


head = new ListNode(2)
head.next = new ListNode(4)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(2)

console.log(isPalindrome(head)) // Expecting 'True'

head.next.next.next.next.next = new ListNode(2)
console.log(isPalindrome(head)) // Expecting 'False'
