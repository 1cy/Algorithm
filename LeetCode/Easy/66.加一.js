/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let length = digits.length;
    let flag = true;
    for(let i = length - 1; i >= 0 ; i--){
        let val = digits[i];
        if(flag && val < 9){
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    if(flag){
        digits.unshift(1);
    } 
    return digits;
};

