/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 未考虑类似[1,1,1,-3,2]情况
// var maxSubArray = function(nums) {
//     let maxValue = nums[0];
//     let maxIndex = 0;
//     let length = nums.length;
//     for(let i = 1; i < length; i++){
//         if(nums[i] > maxValue){
//             maxValue = nums[i];
//             maxIndex = i;
//         }
//     }
//     let leftMaxIndex = maxIndex;
//     let leftMaxValue = maxValue;
//     let rightMaxValue = maxValue;
//     let rightMaxIndex = maxIndex;
//     let sum = maxValue;
//     for(let i = maxIndex - 1; i >= 0; i--){
//         sum += nums[i];
//         if(sum > leftMaxValue){
//             leftMaxValue = sum;
//             leftMaxIndex = i;
//         }
//     }
//     sum = maxValue;
//     for(let i = maxIndex + 1; i < length; i++){
//         sum += nums[i];
//         if(sum > rightMaxValue){
//             rightMaxValue = sum;
//             rightMaxIndex = i;
//         }
//     }
//     return leftMaxValue > rightMaxValue ? leftMaxValue : rightMaxValue;
// };
var maxSubArray = function(nums) {
    let arr= [];
    let length = nums.length;
    arr[0] = nums[0];
    for(let i = 1 ;i < length; i++){
        if(arr[i -1]  < 0){
            arr[i] = nums[i];
        } else {
            arr[i] = arr[i -1] + nums[i];
        }
    }
    let max = arr.reduce(function(sums, val){
        return sums > val ? sums : val;
    }, arr[0]);
    return max;
};

