/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let max;
  for (let i = arr.length - 1; i > -1; i--) {
    if (i === arr.length - 1) {
      max = arr[i];
      arr[i] = -1;
      continue;
    }

    let el = arr[i];
    arr[i] = max;

    if (max < el) max = el;
  }

  return arr;
};
