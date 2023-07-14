/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) set.add(nums[i]);

  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let numLeft = num - 1;
    if (set.has(numLeft)) continue;

    let numRight = num + 1;
    let count = 1;
    while (set.has(numRight++)) count++;

    maxCount = Math.max(count, maxCount);
  }

  return maxCount;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
