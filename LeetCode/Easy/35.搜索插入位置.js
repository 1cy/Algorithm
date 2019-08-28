/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let length = nums.length;
    let index;
    for(let i=0; i< length; i++){
        if(nums[i] === target){
            return i;
        }
        if(nums[i] > target){
            index = i;
            nums.push(target);
            length = nums.length;
            break;
        }
    }
    if(index === undefined){
        nums.push(target);
        return nums.length -1;
    }
    for(let i = index; i < length; i++){
        let temp = nums[length -1];
        nums[length -1] = nums[i];
        nums[i] = temp;
    }
    return index;
};

