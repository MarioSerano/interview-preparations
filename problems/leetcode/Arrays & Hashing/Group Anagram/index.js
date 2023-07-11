/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("#");
    if (typeof obj[key] === "undefined") obj[key] = [];
    obj[key].push(str);
  }

  return Object.values(obj);
};
