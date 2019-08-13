/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if(s.length == 1 && k == 1){
        return 1;
    }
    return reduce(s, k);
};

var reduce = function(s, k) {
    let frequence = {};
    let arr = [];
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(frequence[char]){
            frequence[char] += 1;
        } else {
            frequence[char] = 1;
        }
    }
    let fkeys = Object.keys(frequence);
    for(let i = 0; i < fkeys.length; i++){
        if (frequence[fkeys[i]] < k){
            arr.push(fkeys[i]);
        }
    }
    if(arr.length > 0){
        let reg = arr.reduce((total, num) => {
            return total + `${num}+|`;
        }, '')
        reg = reg.substr(0, reg.length -1 );
        let array = s.replace(new RegExp(reg, 'g'), ',').split(',');
        let index = 0;
        let num = array[0].length;
        for(let i = 1; i < array.length; i++){
            if(array[i].length > num){
                num = array[i];
                index = i;
            }
        }
        return reduce(array[index], k);
    } else {
        return s.length;
    }
}
