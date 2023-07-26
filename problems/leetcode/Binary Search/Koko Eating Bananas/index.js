/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let max = piles[0];
  for (let i = 1; i < piles.length; i++) {
    max = Math.max(max, piles[i]);
  }

  let k;
  let low = 1,
    high = max;
  let res = high;
  while (low <= high) {
    // why <=?
    k = low + Math.floor((high - low) / 2);
    currH = 0;

    for (let el of piles) {
      currH += Math.ceil(el / k);
    }

    if (currH <= h) {
      res = Math.min(res, k); // why this?
      high = k - 1;
    } else {
      low = k + 1;
    }
  }

  return res;
};

let h = 5;
let piles = [30, 11, 23, 4, 20];
console.log(minEatingSpeed(piles, h));
