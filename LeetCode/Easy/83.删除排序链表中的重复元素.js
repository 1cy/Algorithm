/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let node = head;
    let prev ;
    while(node != null){
        if(prev != null && prev.val == node.val){
            prev.next = node.next;
            node = node.next;
        } else {
            prev = node;
            if(node.next != null && node.val == node.next.val){
                node.next = node.next.next;
                node = node.next;
            }
        }
    }
    return head;
};

