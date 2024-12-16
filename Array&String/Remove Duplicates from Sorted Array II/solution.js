/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let uniqueIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (uniqueIndex < 2 || nums[i] != nums[uniqueIndex - 2] ) {
            nums[uniqueIndex] = nums[i];
            uniqueIndex++
        }
    }

    return uniqueIndex;
};

/**
 * Time Complexity (Big-O): O(n)
 * Space Complexity: O(1) 
*/

