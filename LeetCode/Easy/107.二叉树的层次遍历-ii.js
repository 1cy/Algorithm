/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root == null) return [];
    let arr = [];
    let fathers = [];
    let children = [];
    let isEnd = true;
    fathers.push(root);
    while(isEnd){
        let list = [];
        for(let i= 0; i< fathers.length; i++){
            if(fathers[i].left){
                children.push(fathers[i].left);
            }
            if(fathers[i].right){
                children.push(fathers[i].right);
            }
            list.push(fathers[i].val);
        }
        arr.unshift(list);
        if(children.length == 0){
            isEnd = false
        } else {
            fathers = children;
            children = [];
        }
    }
    return arr;
};

