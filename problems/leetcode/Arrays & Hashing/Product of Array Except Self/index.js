/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = [];
  let postfix = [];

  for (let i = 0; i < nums.length; i++) {
    prefix.push(nums[i] * (prefix[i - 1] ?? 1));
  }

  for (let i = 0; i < nums.length; i++) {
    postfix.push(nums[nums.length - (1 + i)] * (postfix[i - 1] ?? 1));
  }

  let ans = [];
  // for (let i = 0; i < nums.length; i++) {
  //   ans[i] = (prefix[i - 1] ?? 1) * (postfix[nums.length - (2 + i)] ?? 1);
  // }

  // 1 2 3 4
  // 1 2 6 24

  // 4 3 2 1
  // 4 12 24 24
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i] * prefix[i - 1] ?? 1);
    // prefix.push(nums[i] * (prefix[i - 1] ?? 1));
  }

  for (let i = 0; i < nums.length; i++) {
    ans[i] *= nums[nums.length - 1];
  }

  // for (let i = 0; i < nums.length; i++) {
  //   postfix.push(nums[nums.length - (1 + i)] * (postfix[i - 1] ?? 1));
  // }

  return ans;
};
