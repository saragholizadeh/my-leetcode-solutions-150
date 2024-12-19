/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let num1 = 0;
    let num2 = numbers.length - 1;
    while (num1 < num2) {
        if (numbers[num1] + numbers[num2] == target) {
            return [num1 + 1, num2 + 1];
        }

        if (numbers[num1] + numbers[num2] < target) {
            num1++
        }

        if (numbers[num1] + numbers[num2] > target) {
            num2--
        }
    }
    return [];

};

/**
 * Time Complexity (Big-O): O(n)
 * Space Complexity: O(1)
 * Algorithm: Two Pointer
*/