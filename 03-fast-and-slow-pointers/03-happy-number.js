/*
Happy Number

Any number will be called a happy number if, after repeatedly replace it with a number equal
to the sum of the square of all of its digits, leads us to the number '1'. All other (not happy)
numbers will never reach '1'. Instead, they will be stuck in a cycle of numbers which does not
include '1'.

Example 1:  Input: 23, Output: True 
            Explanation: Here are the steps to find out that 23 is a happy number

            1. 2^2 + 3^2 = 4 + 9 = 13
            2. 1^2 + 3^2 = 1 + 9 = 10
            3. 1^2 + 0^2 = 1 + 0 = 1

Example 2:  Input 12, Ouput: False 
            Explanation: process get stuck in cycle of numbers not '1'
            89 -> 145 -> 42 -> 20 -> 4 -> 16 -> 37 -> 58 -> 89

Time: O(logN) based on number of digits, and next number < 9^2M
Space: O(1)
*/

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

/*
define slow to num (head) input, fast to num (head) input
    while loop iteration true 'while(true)'
        slow assigned to helper function to square num (slow) --- move 1 step
        fast assigned to helper function to within helper function (fast) --- move 2 steps
            conditional check if slow equals fsat, break (cycle stuck on '1')
return if slow boolean check if it equals 1 or not.

helper function calculates squared of sum with num (fast or slow) passed
assign num to zero
    while loop iterate num passed > 0
    find digit by num modulos % 10
    sum add to squared digit
    num is assigned to Math floor num / 10
and return sum
*/