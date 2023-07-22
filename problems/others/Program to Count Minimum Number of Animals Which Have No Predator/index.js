/**
 *
 * Suppose we have a list of numbers called nums where nums[i] shows the predator of the ith animal and if there is no predator, it will hold −1.
 * We have to find the smallest number of groups of animals such that no animal is in the same group with its direct or indirect predator.
 * So, if the input is like nums = [1, 2, −1, 4, 5, −1], then the output will be 3, as we can have the groups like: [0, 3], [1, 4], [2, 5].
 */

/**
 * @param {number[]} nums
 * @returns {number}
 */
var minPredatorGroup = function (nums) {
  let roots = [];
  let nodes = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num === -1) {
      roots.push(i);
      continue;
    }
    if (typeof nodes[num] === "undefined") nodes[num] = [];
    nodes[num].push(i);
  }

  let max = Number.NEGATIVE_INFINITY;
  for (let root of roots) {
    let stack = [[root, 1]]; // [idx, height]

    while (stack.length > 0) {
      let [currNode, currHeight] = stack.pop();
      max = Math.max(max, currHeight);
      if (typeof nodes[currNode] !== "undefined") {
        for (let el of nodes[currNode]) {
          stack.push([el, currHeight + 1]);
        }
      }
    }
  }

  return max;
};

let nums = [-1, 1, 2, 3, 4, 5];
console.log(minPredatorGroup(nums));
