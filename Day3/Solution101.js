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
 * @return {boolean}
 */
function isSymmetric(root) {

    //base case
    if (root == null) return true;

    return isSymmetric(root.left, root.right);

};

/**
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {boolean}
 */
function isSymmetric(left, right) {

    //making sure if left and right subtree are both null otherwise it's not equal
    if (left == null || right == null) return left == right;

    if (left.val != right.val) return false;

    //iterate
    return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);

 }