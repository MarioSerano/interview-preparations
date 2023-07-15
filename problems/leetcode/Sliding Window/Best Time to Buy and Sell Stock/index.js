/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let leftPtr = 0;
  let rightPtr = 1;
  let max = 0;
  while (leftPtr < prices.length && rightPtr < prices.length) {
    let leftNum = prices[leftPtr];
    let rightNum = prices[rightPtr];
    if (leftNum <= rightNum) {
      max = Math.max(max, rightNum - leftNum);
      rightPtr++;
    } else {
      leftPtr = rightPtr;
    }
  }

  return max;
};

let arr = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr));
