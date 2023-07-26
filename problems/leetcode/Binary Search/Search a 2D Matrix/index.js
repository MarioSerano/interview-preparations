/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let verticalIdx = searchVertical(matrix, target, 0, matrix.length - 1);
  if (verticalIdx === -1) return false;

  let horizontalIdx = binarySearch(
    matrix[verticalIdx],
    target,
    0,
    matrix[verticalIdx].length - 1
  );

  return horizontalIdx !== -1;
};

var searchVertical = function (rows, target, low, high) {
  if (low > high) return -1;
  let mid = Math.floor(low + (high - low) / 2);
  let currRow = rows[mid];
  if (currRow[0] <= target && currRow[currRow.length - 1] >= target) return mid;
  else if (currRow[0] > target)
    return searchVertical(rows, target, low, mid - 1);
  else if (currRow[currRow.length - 1] < target)
    return searchVertical(rows, target, mid + 1, high);
};

var binarySearch = function (rows, target, low, high) {
  if (low > high) return -1;
  let mid = low + Math.floor((high - low) / 2);
  if (rows[mid] === target) return mid;
  else if (rows[mid] < target) return binarySearch(rows, target, mid + 1, high);
  else return binarySearch(rows, target, low, mid - 1);
};

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
console.log(searchMatrix(matrix, 13));
