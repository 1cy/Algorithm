/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sums = 0;
    let flag = false;
    let length = s.length;
    for(let i=0; i< length; i++){
        if(s[i] == ' '){
            flag = true;
        } else {
            if(flag){
                sums = 1;
                flag = false;
            } else {
                sums ++;
            }
        }
    }
    return sums;
};

