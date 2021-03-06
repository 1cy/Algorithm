/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    let n = new ListNode(0);
    let head = n;
    while(l1 && l2 ){
        if(l1.val < l2.val){
            n.next = l1;
            l1 = l1.next;
        }else{
            n.next = l2;
            l2 = l2.next;
        }
        n = n.next;
    }
    if (l1) n.next = l1;
    if (l2) n.next = l2;
    return head.next;
};

