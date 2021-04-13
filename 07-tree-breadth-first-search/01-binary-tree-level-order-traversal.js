/*
Binary Tree Level Order Traversal (BFS)

Given a binary tree, populate an array to represent its level by level traversal.
You should populate the values of all nodes of each level from left to right in
seperate sub arrays.


Example 2: Level Order: [[12], [17,1], [9,10,5]]

        12
       /   \
      7     1
     /     / \
    9     10  5

Time: O(n)
Space: O(n)
*/

function traverse (root) {
    let result = [];
    if (root === null) return result;

    const queue = []; //FIFO
    queue.push(root);

    while (queue.length > 0) {
        const levelSize = queue.length;
        currentLevel = [];
  
        //i repeats from zero because of the while starts another iteration with i back to 0
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // node at the first of queue (node tree object)
            currentLevel.push(currentNode.value); //push value of current node from sub-tree node push into queue

            if (currentNode.left !== null) {  //if object on L side not empty, push left sub-tree into queue
                queue.push(currentNode.left); 
            }

            if (currentNode.right !== null) { //if object on R side not empty, push right sub-tree into queue
                queue.push(currentNode.right); 
            }
            result.push(currentLevel);
        }
    } 
    return result;
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
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(traverse(root))
/*
When console loging the root, console.log(root), 
an object class with nested objects.

TreeNode {
  value: 12,
  left: TreeNode {
    value: 7,
    left: TreeNode { value: 9, left: null, right: null },
    right: null
  },
  right: TreeNode {
    value: 1,
    left: TreeNode { value: 10, left: null, right: null },
    right: TreeNode { value: 5, left: null, right: null }
  }
}
*/
