/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let pointerLeft = 0;
  let pointerRight = 1;
  while (pointerLeft < nums.length - 1 && pointerRight < nums.length) {
    if (nums[pointerLeft] <= nums[pointerRight]) {
      pointerLeft++;
      pointerRight++;
      continue;
    }

    return (
      pointerRight + 1 >= nums.length ||
      checkPossibilityHelper(nums, pointerLeft, pointerRight + 1) ||
      ((pointerLeft < 1 || nums[pointerLeft - 1] <= nums[pointerRight]) &&
        checkPossibilityHelper(nums, pointerLeft + 1, pointerRight + 1))
    );
  }

  return true;
};

var checkPossibilityHelper = function (nums, pointerLeft, pointerRight) {
  if (nums[pointerLeft] <= nums[pointerRight]) {
    pointerLeft = pointerRight;
    pointerRight++;
  } else {
    return false;
  }

  while (pointerLeft < nums.length - 1 && pointerRight < nums.length) {
    if (nums[pointerLeft] <= nums[pointerRight]) {
      pointerLeft++;
      pointerRight++;
      continue;
    }

    return false;
  }

  return true;
};
