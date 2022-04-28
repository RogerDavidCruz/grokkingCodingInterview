/*
Sum of Path Numbers [DFS --> LC 129]

Given a binary tree where each node can only have a digit (0-9) value, 
each root to leaf path will represent a number. Find the total sum of 
all the numbers represented by all paths.

Example 1:
    Input:    1
            /  \
           7    9
               / \
              2   9
    Output: 408
    Explanation: 17 + 192 + 199
*/

const findSumOfPathNumbers = root => {
    return findRootToLeafPathNumbers(root, 0);
}

const findRootToLeafPathNumbers = (currentNode, pathSum) => {
    if (!currentNode) return 0;

    // calculate the path number of current node * w/ node digits & 
    // path sum prior at each level traversal
    pathSum = 10 * pathSum + currentNode.val;

    // if current node is a leaf, return current path sum
    if (!currentNode.left && !currentNode.right) return pathSum;

    // traversal left and right sub-tree
    return findRootToLeafPathNumbers(currentNode.left, pathSum) + 
           findRootToLeafPathNumbers(currentNode.right, pathSum);
}

/*
Time: O(n) 
Space: O(n) recursive stack

Algorithm:

1. Calculate path sum
2. check for leaf
3. recursive calls with addition
*/