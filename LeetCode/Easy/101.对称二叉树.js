/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//  case 183 Time Limit Exceeded
// var isSymmetric = function(root) {
//     if(root == null) return true;
//     if(root.left == null && root.right == null) return true;
//     let arr = [root.left, root.right];
//     let index = 2;
//     while(true){
//         if(arr.length == index){
//             let length = arr.length;
//             let half = length / 2; 
//             let isAllNull = true; 
//             for(let i = 0; i< half; i++ ){
//                 if(arr[i] || arr[length -i -1]){
//                     isAllNull = false;
//                 }
//                 if(!isEqual(arr[i], arr[length -i -1])) return false;
//             }
//             if(isAllNull) return true;
//             index = index * 2;
//         }
//         let node = arr.shift();
//         if(node){
//             arr.push(node.left);
//             arr.push(node.right);
//         } else {
//             arr.push(null);
//             arr.push(null);
//         }
//     }
// };
//
// var isEqual = function(a, b){
//     if( a && b && a.val == b.val){
//         return true;
//     }
//     if( a == null && b == null){
//         return true
//     }
//     return false;
// }

var isSymmetric = function(root) {
    if(!root) return true;
    let q1 = [];
    let q2 = [];
    q1.push(root.left);
    q2.push(root.right);
    while (q1.length > 0 && q2.length > 0) {
        let node1 = q1.shift();
        let node2 = q2.shift();
        if((node1 && !node2) || (!node1 && node2)) return false;
        if (node1) {
            if (node1.val != node2.val) return false;
            q1.push(node1.left);
            q1.push(node1.right);
            q2.push(node2.right);
            q2.push(node2.left);
        }
       
    }
    return true;
}
