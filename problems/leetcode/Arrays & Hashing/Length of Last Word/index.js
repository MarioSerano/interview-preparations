/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let sArr = s
    .trim()
    .split(" ")
    .map((w) => w.trim());

  return sArr[sArr.length - 1].length;
};
