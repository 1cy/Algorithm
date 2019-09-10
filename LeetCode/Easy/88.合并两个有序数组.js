/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let length = nums1.length;
    m--;
    n--;
    for(let i = length -1 ;i >=0; i--){
        if(n < 0){
            return nums1;
        }
        if(m >= 0){
            if(nums1[m] > nums2[n]){
                nums1[i] = nums1[m];
                nums1[m] = 0;
                m--;
            }else {
                nums1[i] = nums2[n];
                n--;
            }
        }else{
            nums1[i] = nums2[n];
            n--;
        }
    }
    return nums1;
};

