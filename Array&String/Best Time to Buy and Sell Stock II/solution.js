/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;
    let start = prices[0];

    for (let i = 1; i < prices.length; i++) {
        let price = prices[i];
        if (start < price) {
            max += price - start;
        }
        start = price;
    }
    return max;
};