/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (!checkRowsValid(board)) return false;

  let colToRows = [...Array(9)].map((e) => Array(9));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      colToRows[i][j] = board[j][i];
    }
  }

  if (!checkRowsValid(colToRows)) return false;

  let subboardToRows = [...Array(9)].map((e) => Array(9));

  let counter = 0;
  for (let i = 0; i < 7; i += 3) {
    for (let j = 0; j < 7; j += 3) {
      let counter1 = 0;
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          subboardToRows[counter][counter1] = board[k + i][l + j];
          counter1++;
        }
      }
      counter++;
    }
  }

  if (!checkRowsValid(subboardToRows)) return false;

  return true;
};

var checkRowsValid = function (rows) {
  for (let row of rows) {
    if (isDuplicateInArr(row)) return false;
  }

  return true;
};

// time complexity: O(n)
var isDuplicateInArr = function (row) {
  const obj = {};
  for (let elem of row) {
    obj[elem] = (obj[elem] || 0) + 1;
  }

  delete obj["."];

  for (let value of Object.values(obj)) {
    if (value > 1) return true;
  }

  return false;
};

let board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
