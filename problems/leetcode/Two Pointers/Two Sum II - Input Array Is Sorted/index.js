/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    let leftNum = numbers[leftPointer];
    let rightNum = numbers[rightPointer];
    if (leftNum + rightNum === target)
      return [leftPointer + 1, rightPointer + 1];
    else if (leftNum + rightNum < target) leftPointer++;
    else rightPointer--;
  }
};
