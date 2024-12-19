/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxStep = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxStep) return false;
        if (i + nums[i] > maxStep) {
            maxStep = i + nums[i];
        }
        if (maxStep >= nums.length - 1) return true;
    }
    return false;
};

/**
 * Time Complexity (Big-O): O(n)
 * Space Complexity: O(1) 
 * Greedy algorithm
*/
