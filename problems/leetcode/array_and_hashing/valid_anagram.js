/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let count = {};

  for (let l of s) count[l] = (count[l] || 0) + 1;
  for (let l of t) count[l]--;
  for (let value of Object.values(count)) if (value !== 0) return false;

  return true;
};
