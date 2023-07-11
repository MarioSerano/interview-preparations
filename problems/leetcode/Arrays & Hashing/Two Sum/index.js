/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const newTarget = target - curr;
    if (typeof obj[newTarget] !== "undefined") {
      return [i, obj[newTarget]];
    }
    obj[curr] = i;
  }
};
