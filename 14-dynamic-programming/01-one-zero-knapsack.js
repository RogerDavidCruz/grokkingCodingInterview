/*
0/1 Knapsack - Dynamic Progamming

Given two integer arrays to present weights and profits of 'N' items, we need to find a subset
of these items which will give us maximum profit such that their cumulative weight is not more
than a given number 'C'. Each item can only be selected once, which means either we put an item
in the knapsack or we skip it.

Example 1:
    Items: [apple, orange, banana, melon]
    Weights: [2, 3, 1, 4]
    Profits: [4, 5, 3, 7]
    Knapsack capacity: 5
    
    The combination: Banana + Melon has best profit of '10 profit'
*/

/*
#1) Basic Solution (brute-force)
    Recursive solution creating a set at each current index

    - Try all combinations of the given items, chose max profit and weight not greater than 'C'
        For each item 'i'
            - Create a new set Including 'i' item, if total weight does not exceed the capacity,
              and recursively process remaining capacity + items
            - Create a new set WITHOUT 'i' item, and recursively process remaining items
        return the set from the above two sets with higher profit.

    Time: 0(2^n)
    Space: O(n)
*/

const solveKnapsack = (profits, weights, capacity) => {
    const knapsackRecursive = (profits, weights, capacity, currentIndex) => {
        //base check
        if (capacity <= 0 || currentIndex >= profits.length) return 0;

        //recursive call including element
        //if weight exceeds capacity, don't process
        let profit1 = 0;
        if(weights[currentIndex] <= capacity) {
            profit1 = profits[currentIndex] + 
            knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1); 
        }

        //recursive call excluding element 
        const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

        return Math.max(profit1, profit2);
    }

    return knapsackRecursive(profits, weights, capacity, 0);
}

let profits = [1,6,10,16];
let weights = [1,2,3,5];

console.log(solveKnapsack(profits, weights, 7)) //22 (total profit)
console.log(solveKnapsack(profits, weights, 6)) //17 (total profit)

/*
#2) Top-down Dynamic Programming with Memoization 

    Time: O(N * C) since memoization array dp[profits.length][capacity + 1] stores results for all subproblems
    Space: O(N * C) asymptotically, O(n*c) space for the 2D memo array, and and O(n) for recursive call-stack

    'N' number of items
    'C' knapsack capacity

    Memoization is when we store the results of all the previously solved "sub-problems" and
    return the results from memory if we encounter a problem that has already been solved.

    Since knapsack 2 changing values (capacity and currentIndex) in knapsackRecursive() function, we can use
    2-Dimensional array to store the results of all the solved sub-problems. We need to store results for 
    every sub-array (i.e. every possible index 'i') and every possible capacity 'c'.

    Memoization array dp[profits.length][capacity + 1]

*/
const solveKnapsackTopDownMemo = (profits, weights, capacity) => {
    const dp = [];

    const knapsackRecursive = (profits, weights, capacity, currentIndex) => {
        //base checks
        if (capacity <= 0 || currentIndex >= profits.length) return 0;

        dp[currentIndex] = dp[currentIndex] || [];
        if (typeof dp[currentIndex][capacity] !== 'undefined') {
            return dp[currentIndex][capacity];
        }


        //recursive call choose element at currentIndex
        let profit = 0;
        if (weights[currentIndex] <= capacity) {
            profit1 = profits[currentIndex] + knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
        }

        //recursive call excluding element at currentIndex
        const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

        dp[currentIndex][capacity] = Math.max(profit1, profit2);
        return dp[currentIndex][capacity];
    }
    return knapsackRecursive(profits, weights, capacity, 0);
}

/*
#3) Bottom-Up Dynamic Programming

    Time: O(N * C)
    Space: O(N * C)
*/