/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const numsObj = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (let i = 0; i <= nums.length; i++) {
        numsObj[nums[i]] = (numsObj[nums[i]] || 0) + 1;

        if (numsObj[nums[i]] > majorityCount) {
            return nums[i];
        }
    }
};