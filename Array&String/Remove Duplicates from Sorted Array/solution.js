/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0;

    let numsIndex = 1;
    let uniqueIndex = 0;

    while (nums.length > numsIndex) {
        if (nums[numsIndex] != nums[uniqueIndex]) {
            uniqueIndex++
            nums[uniqueIndex] = nums[numsIndex]
        }
        numsIndex++
    }
    return uniqueIndex + 1;
};

/**
 * Time Complexity (Big-O): O(n)
 * Space Complexity: O(1) 
*/

