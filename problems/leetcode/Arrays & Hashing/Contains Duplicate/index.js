/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let obj = new Set();
  let i = 0;
  while (i < nums.length) {
    let curr = nums[i];
    if (obj.has(curr)) return true;
    else obj.add(curr);
    i++;
  }

  return false;
};
