/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let leftPointer = 0;
  let rightPointer = 1;
  let max = 0;
  while (leftPointer > 0 && rightPointer < s.length) {
    let leftCharacter = s[leftPointer];
    let rightCharacter = s[rightPointer];
    if (leftCharacter === rightCharacter) {
      rightPointer++;
      max = Math.max(max, count);
    } else {
      let count = getMaxLengthWithReplacementRight(
        s,
        k,
        leftPointer,
        rightPointer
      );
      max = Math.max(max, count);
      leftPointer = rightPointer++;
    }
  }

  return max;
};

var getMaxLengthWithReplacementRight = function (
  s,
  k,
  leftPointer,
  rightPointer
) {
  while (rightPointer < s.length) {
    let leftCharacter = s[leftPointer];
    let rightCharacter = s[rightPointer];
    if (leftCharacter === rightCharacter) {
      rightPointer++;
    } else {
      if (k > 0) {
        rightPointer++;
        k--;
      } else break;
    }
  }

  return rightPointer - leftPointer;
};

var getMaxLengthWithReplacementLeft = function (
  s,
  k,
  leftPointer,
  rightPointer
) {
  while (leftPointer > 0) {
    let leftCharacter = s[leftPointer];
    let rightCharacter = s[rightPointer];
    if (leftCharacter === rightCharacter) {
      leftCharacter--;
    } else {
      if (k > 0) {
        leftPointer--;
        k--;
      } else break;
    }
  }

  return rightPointer - leftPointer;
};

console.log(characterReplacement("ABBB", 2));
