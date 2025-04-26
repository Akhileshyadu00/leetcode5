// Preorder traversal

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
var preorderTraversal = function(root) {
      if (!root) return [];

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val); 

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return result;
};

/* 
Link:- https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/1617545621/

Time Complexity:- O(n)
Each of the n nodes is visited exactly once: O(n)
Pushed and popped from the stack once, Stack operations are constant time: O(1)

Space Complexity:- O(h) in the best case, O(n) in the worst case
Where h is the height of the tree:
Stack space depends on how many nodes are in memory at once:
In a balanced binary tree, height h = log n ⇒ stack size = O(log n)
In a worst-case skewed tree (like a linked list), height = n ⇒ stack size = O(n)
The result array stores all n node values ⇒ O(n) space.

*/