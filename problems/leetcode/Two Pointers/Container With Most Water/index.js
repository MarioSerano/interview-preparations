/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let lp = 0;
  let rp = height.length - 1;

  let max = 0;
  while (lp < rp) {
    let ln = height[lp];
    let rn = height[rp];

    let h = rp - lp;
    let v = Math.min(ln, rn);
    let area = h * v;
    max = Math.max(max, area);
    if (rn > ln) lp++;
    else rp--;
  }

  return max;
};

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arr));
