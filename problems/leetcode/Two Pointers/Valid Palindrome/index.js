/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let regex = /[a-zA-Z0-9]/;

  let leftPointer = 0;
  let rightPointer = s.length - 1;
  while (leftPointer < rightPointer) {
    let leftLetter = s[leftPointer];
    let rightLetter = s[rightPointer];

    let leftPointerValid = regex.test(leftLetter);
    let rightPointerValid = regex.test(rightLetter);
    if (!leftPointerValid && !rightPointerValid) {
      leftPointer++;
      rightPointer--;
      continue;
    }

    if (!leftPointerValid) {
      leftPointer++;
      continue;
    }

    if (!rightPointerValid) {
      rightPointer--;
      continue;
    }

    if (leftLetter.toLowerCase() !== rightLetter.toLowerCase()) return false;
    leftPointer++;
    rightPointer--;
  }

  return true;
};

let s = "sass";
console.log(isPalindrome(s));
