/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let leftPtr = 0;
  let rightPtr = 1;

  let max = 1;
  let set = new Set([s[0]]);
  while (leftPtr < s.length && rightPtr < s.length) {
    let leftLetter = s[leftPtr];
    let rightLetter = s[rightPtr];
    if (set.has(rightLetter)) {
      if (leftLetter === rightLetter) leftPtr++;
      else {
        while (leftLetter !== rightLetter) {
          leftLetter = s[leftPtr++];
          set.delete(leftLetter);
        }
      }
    }

    set.add(rightLetter);
    max = Math.max(max, set.size);
    rightPtr++;
  }

  return max;
};

let s = "aabaab!bb";
console.log(lengthOfLongestSubstring(s));
