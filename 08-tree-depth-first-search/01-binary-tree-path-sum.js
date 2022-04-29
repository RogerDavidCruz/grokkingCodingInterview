/*
Binary Tree Path Sum (DFS)

Given a binary tree and a number 'S', find if the tree has path from
root to leaf such that sum of all the node values of the path equal 'S'

Example 2: S = 23
           Output: True

           S = 16
           Output: False


           12
          /  \
        7     1
       /     / \
      9     10  5

      Time: O(n)
      Space: O(n)
*/

function hasPath (root, sum) {
    if (root === null) return false;

    //base case
    if (root.value === sum && root.left === null && root.right === null) {
        return true;
    }

    //recursive case
    return hasPath(root.left, sum - root.value) || hasPath(root.right, sum - root.value);
}

//Abridge Version

const hasPathDFS = (root, sum) => {
    if (!root) return false;
    if (root.val === sum && !root.left && !root.right) return true;
    return hasPathDFS(root.left, sum - root.val) || hasPathDFS(root.right, sum - root.val);
}

class TreeNode {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5);

console.log(hasPath(root, 23)) //true

/*
recursive stack - each tree node object passed

root whole tree - 12
root.left node - left sub-tree - 7
root.left.left node - left left child sub-tree 9
root.left.left.left node - NULL
***then switched to right sub-tree side
root.right node - right-sub-tree - 1
root.right.left node - right left child sub-tree 10 
exit with base case met and returned true
*/

console.log(hasPath(root, 16)) //false

/*
recursive stack - each tree node object passed

root - whole tree - 12
root.left node - left sub tree - 7
root.left.left node - left sub tree - 9
root.left.left.left & root.left.left.right nodes - NULL
***then switched to right sub tree checks
root.right node - right sub tree - 1
root.right.left node - right, left child sub tree - 10
root.right.left.left && root.right.left.right nodes - NULL
root.right.right - right w/ right child sub tree - 5
root.right.right.left && root.right.right.right nodes - NULL
we finish recursive calls with an exit false
*/