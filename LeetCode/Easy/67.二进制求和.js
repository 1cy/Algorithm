/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a.length > b.length){
        b = '0'.repeat(a.length - b.length) + b;
    }else{
        a = '0'.repeat(b.length - a.length) + a;
    }
    let length = a.length;
    let carry = 0;
    let sum = '';
    for(let i= length -1; i >= 0; i--){
        let temp = carry + parseInt(a[i]) + parseInt(b[i]);
        if(temp > 2){
            carry = 1;
            sum = '1' + sum;
        } else if ( temp == 2) {
            carry = 1;
            sum =  '0' + sum;
        } else {
            carry = 0;
            sum =  temp + sum;
        }
    }
    if(carry){
        sum = '1' + sum;
    }
    return sum;
};

