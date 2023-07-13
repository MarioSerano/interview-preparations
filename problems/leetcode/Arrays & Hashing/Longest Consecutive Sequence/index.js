/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i] + 1;
  }

  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let numLeft = num - 1;
    if (typeof obj[numLeft] !== "undefined") continue;

    let numRight = num + 1;
    let count = 1;
    while (typeof obj[numRight] !== "undefined") {
      numRight = numRight + 1;
      count++;
    }

    maxCount = Math.max(count, maxCount);
  }

  return maxCount;
};
