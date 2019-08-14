/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.list = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.list;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let res = [];
    let array = JSON.parse(JSON.stringify(this.list));
    let length = array.length;
    while(length > 0){
        let index = Math.floor(Math.random() * length);
        res = res.concat(array.splice(index, 1));
        length = array.length;
    }
    return res;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

