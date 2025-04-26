// Postorder Traversal

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
var postorderTraversal = function(root) {
    if (!root) return [];

    const stack1 = [root];
    const stack2 = []; 
    const result = [];

    while (stack1.length > 0) {
        const node = stack1.pop();
        stack2.push(node);

        if (node.left) stack1.push(node.left);
        if (node.right) stack1.push(node.right);
    }

    while (stack2.length > 0) {
        result.push(stack2.pop().val);
    }

    return result;
};

/*
Link:- https://leetcode.com/problems/binary-tree-postorder-traversal/submissions/1617554022/

Time Complexity:- O(n)
n is the number of nodes in the binary tree. Each node is:
Pushed once to stack1 → O(1)
Pushed once to stack2 → O(1)
Popped once from stack2 and added to result → O(1)
So for n nodes, total operations = 3 × O(1) × n = O(n)

Space Complexity:- O(n)
stack1 → can hold up to n nodes in the worst case.
stack2 → can also hold up to n nodes.
result → stores all n values.
*/