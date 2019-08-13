/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let cache = {};
    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < D.length; j++){
            let sum = C[i] + D[j];
            if (cache[sum]) {
                cache[sum] += 1;
            } else {
                cache[sum] = 1;
            }
            
        }
    }
    let num = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++){
            let sum = -(A[i] + B[j]);
            if (cache[sum]) {
                num += cache[sum];   
            }   
        }
    }
    return num;
};

