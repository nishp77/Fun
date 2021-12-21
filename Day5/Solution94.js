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

function inorderTraversal(root) {
    
    if(root==null) return;

    inorderTraversal(root.left);
    Array.prototype.push(root.val);
    inorderTraversal(root.right);

};