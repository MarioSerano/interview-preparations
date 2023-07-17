/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let count = {};

  let leftPointer = 0;
  let ans = 0;
  let largestCount = 0;
  for (let rightPointer in s) {
    count[s[rightPointer]] = (count[s[rightPointer]] || 0) + 1;
    largestCount = Math.max(largestCount, count[s[rightPointer]]);

    if (rightPointer - leftPointer + 1 - largestCount > k) {
      count[s[leftPointer]]--;
      leftPointer++;
    }

    ans = Math.max(ans, rightPointer - leftPointer + 1);
  }

  return ans;
};
