/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;
    let length = nums.length;
    for(let i = 0; i< length; i++){
        if(nums[i] !== val){
            if(i !== index){
                nums[index] = nums[i];
            }
            index++;
        }
    }
    nums.length = index;
    return index; 
};

