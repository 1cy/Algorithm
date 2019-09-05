/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 1 || x == 0) return x;
    let temp;
    let int;
    let max = x;
    let min = 0;
    while( max - min > 0.5){
        temp = (max + min) /2;
        int = Math.floor(temp);
        if( int * int == x){
            return int;
        } else if( temp * temp > x){
            max = temp;
        } else {
            min = temp;
        }
    }
    temp = Math.round(temp);
    return temp * temp < x ? temp : temp - 1;
};

