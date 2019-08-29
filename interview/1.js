/*
 * 
 *
 * 看到的面试题
 * 遍历数组1,2,3,4...,16
 * 
 * [[1, 2, 4,  7],
 *  [3, 5, 8, 11],
 *  [6, 9, 12,14],
 *  [10,13,15,16]];
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var read = function(nums) {
    let i = 0, j =0;
    let a = 0, b =0;
    let length = nums.length;
    while(a != length && b != length){
        console.log(nums[i][j]);
        if(j != 0 && i != length-1){
            i++;
            j--;
        }else{
            if(b<length-1){
                b++;
                a = 0;               
            }else{
                a++;
            }
            i = a;
            j = b;
        }
    }
};

