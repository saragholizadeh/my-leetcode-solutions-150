/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    // m : nums1 valid elements
    // n : nums2 valid elements
    // m + n : final num1 elements

    let position = m + n - 1 // Last position in nums1
    let position1 = m - 1; // Last valid elements in nums1
    let position2 = n - 1; // last valid elements in nums2

    while (position1 >= 0 && position2 >= 0) {
        if (nums1[position1] < nums2[position2]) {
            nums1[position] = nums2[position2];
            position2--
        } else {
            nums1[position] = nums1[position1];
            position1--
        }
        position--
    }


    // If there is any elements in nums2 that is remaind, add it to nums1
    while (position2 >= 0) {
        nums1[position] = nums2[position2];
        position2--
        position--
    }

};


/**
 * Time Complexity (Big-O): O(m + n)
 * Space Complexity: O(1) 
*/
