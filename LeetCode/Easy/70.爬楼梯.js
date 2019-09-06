/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = Array.from({
        0 : 0,
        1 : 1,
        2 : 2,
        length: n + 1});
    for(let i= 3; i <= n ; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
};


