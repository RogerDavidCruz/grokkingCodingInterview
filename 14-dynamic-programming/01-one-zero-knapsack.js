/*
Basic Solution 
    Recursive solution creating a set at each current index

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
Top-down Dynamic Programming with Memoization

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
Time: O(n*c) since memoization array dp[profits.length][capacity + 1] stores results for all subproblems
Space: O(n*c) asymptotically, O(n*c) space for the 2D memo array, and and O(n) for recursive call-stack

*/