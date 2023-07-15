/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    let leftLetter = s[leftPointer];
    let rightLetter = s[rightPointer];
    if (leftLetter === rightLetter) {
      leftPointer++;
      rightPointer--;
      continue;
    }

    return (
      validPalindromeHelper(s, leftPointer + 1, rightPointer) ||
      validPalindromeHelper(s, leftPointer, rightPointer - 1)
    );
  }

  return true;
};

var validPalindromeHelper = function (s, leftPointer, rightPointer) {
  while (leftPointer < rightPointer) {
    let leftLetter = s[leftPointer];
    let rightLetter = s[rightPointer];
    if (leftLetter === rightLetter) {
      leftPointer++;
      rightPointer--;
    } else return false;
  }

  return true;
};
