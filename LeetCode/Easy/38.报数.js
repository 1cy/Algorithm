/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let arr = ['1'];
    if(n === 1){
        return arr[0];
    }
    for(let i = 1; i< n; i++){
        arr[i] = count(arr[i-1]);      
    }
    return arr[n - 1];
};

var count = function(str) {
    let length = str.length;
    if( length === 1) {
        return '1' + str;
    }
    let repeat = 1;
    let repeatNumber = str[0];
    let c = '';
    for(let i = 1; i< length; i++){
        if( str[i] == repeatNumber ){
            repeat++;
        } else {
            c += repeat + '' + repeatNumber;
            repeatNumber = str[i];
            repeat = 1;
        }
    }
    return c + repeat + '' + repeatNumber;
}
