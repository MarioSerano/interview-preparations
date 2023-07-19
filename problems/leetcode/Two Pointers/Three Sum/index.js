/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let ans = [];
  // todo: i < nums.length? can we get three sum if i < nums.length?
  for (let i = 0; i < nums.length - 2; i++) {
    let num = nums[i];
    if (num > 0) break;
    if (i > 0 && nums[i - 1] === num) continue;

    // num + (nums[lp] + nums[rp]) = 0
    // num = - (nums[lp] + nums[rp])
    // two sum, target = num

    let lp = i + 1;
    let rp = nums.length - 1;
    while (rp > lp) {
      if (rp < nums.length - 1 && nums[rp] === nums[rp + 1]) {
        rp--;
        continue;
      }

      let add = nums[rp] + nums[lp];
      if (add + num < 0) {
        lp++;
      } else if (add + num > 0) {
        rp--;
      } else if (add + num === 0) {
        ans.push([nums[i], nums[lp], nums[rp]]);
        lp++;
        rp--;
      }
    }
  }

  return ans;
};

// [-3, 0, 1, 1, 2, 2, 3]

let nums = [-4, 1, 2, 2];
console.log(threeSum(nums));
