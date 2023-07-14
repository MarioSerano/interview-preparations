/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let obj = Array(3).fill(0);
  for (let num of nums) obj[num]++;

  let idx = 0;
  for (let i = 0; i < 3; i++) {
    let count = obj[i];
    while (count > 0) {
      nums[idx] = i;
      idx++;
      count--;
    }
  }

  return nums;
};

let arr = [2, 0, 1];
console.log(sortColors(arr));
