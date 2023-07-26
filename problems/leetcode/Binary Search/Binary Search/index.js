/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binSearch(nums, target, 0, nums.length - 1);
};

var binSearch = function (nums, target, left, right) {
  if (left > right) return -1;
  let mid = Math.floor(left + (right - left) / 2);
  if (nums[mid] === target) return mid;
  else if (nums[mid] < target) return binSearch(nums, target, mid + 1, right);
  else return binSearch(nums, target, left, mid - 1);
};

let arr = [-1, 0, 3, 5, 9, 12];
console.log(search(arr, 2));
