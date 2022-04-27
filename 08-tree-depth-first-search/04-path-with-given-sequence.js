/*
Path with given sequence [DFS --> LC 1430]

Given a binary tree and a number sequence, find if the sequence is present 
as a root-to-leaf path in the given tree.

Example 1: 
    Input, Sequence: [1,9,9]
           Binary Tree:
                           1_
                         /  \
                        7    9_
                            / \
                           2   9_
    Output: True                           
*/

class TreeNode {
    constructor (val, left = null, right = null) { //set to null initially
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const findPath = (root, sequence) => {
    if (!root) return sequence.length === 0;
    return findPathRecursive(root, sequence, 0);
}

const findPathRecursive = (currentNode, sequence, sequenceIndex) => {
    if (!currentNode) return false;
    const seqLen = sequence.length;

    if (sequenceIndex >= seqLen || currentNode.val !== sequence[sequenceIndex]) {
        return false;
    }

    // if the current node is a leaf, and at end of the sequence, we found the path!
    if (!currentNode.left && !currentNode.right && sequenceIndex === seqLen - 1) {
        return true;
    }

    // recursively call to traverse the left and right sub-trees
    // return true if any of the two recursive call return true;

    return findPathRecursive(currentNode.left, sequence, sequenceIndex + 1) ||
           findPathRecursive(currentNode.right, sequence. sequenceIndex + 1);
}

/*
Time: O(n) where n is number of nodes
Space: O(n) recursion stack, all worst case scenarios

Algorithm:

1. check current node
2. sequence length
3. check if index > sequence length or not?
4. leaf check
5. traverse, recursive calls

*/