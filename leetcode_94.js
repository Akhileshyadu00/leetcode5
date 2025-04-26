//Inorder traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }     
        current = stack.pop();
        result.push(current.val);

        current = current.right;
    }
    return result;
};


/*

Link:- https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/1618180666/

Time Complexity:- O(n)
n is the number of nodes in the binary tree. Every node is:
Pushed to the stack once when we go left (current = current.left)
Popped from the stack once to visit the node (current = stack.pop())
Hence, each node is processed exactly once → total operations = O(n)

Space Complexity:- O(n)
In the worst case, the stack holds up to n nodes.
This happens when the tree is completely unbalanced (like a linked list).
In the average/balanced case, the stack holds nodes up to the height of the tree:
For a balanced binary tree, this is O(log n)
But we consider the worst-case for complexity:
Stack space: up to O(n)
Result array: stores all n node values → also O(n)
*/