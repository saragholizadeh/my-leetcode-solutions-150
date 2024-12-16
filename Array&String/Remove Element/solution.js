/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let position = 0; // start from the first elements of nums
    let k = 0; // track the position of elements!=val and the final array length

    while (position < nums.length){
        if (nums[position] != val) {
            nums[k] = nums[position];
            k++
        }
        position++
    }
    return k;
};

/**
 * Time Complexity (Big-O): O(n)
 * Space Complexity: O(1) 
*/
