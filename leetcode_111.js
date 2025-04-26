// Minimum depth of binary tree

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
 * @return {number}
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
var minDepth = function(root) {
     if (!root) return 0;

    const queue = [[root, 1]];

    while (queue.length > 0) {
        const [node, depth] = queue.shift();
       
        if (!node.left && !node.right) {
            return depth;
        }

        if (node.left) {
            queue.push([node.left, depth + 1]);
        }

        if (node.right) {
            queue.push([node.right, depth + 1]);
        }
    }
    return 0;
};

/*

Link:- https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/1617515501/

Time Complexity:- O(n)

In the worst case, we visit every node once, especially if the minimum leaf is deep (e.g. skewed tree).
In the best/average case, BFS can return early (before visiting all nodes) once a shallow leaf is found.

Space Complexity:-O(n)

The queue stores nodes level by level.
In the worst case, the tree is a complete binary tree, and the queue will hold up to n/2 nodes at the last level.
This makes space usage proportional to the maximum width of the tree ⇒ O(n) in the worst case
*/