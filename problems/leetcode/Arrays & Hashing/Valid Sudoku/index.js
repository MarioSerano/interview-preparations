/**
 * @param {character[][]} col
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    let boxSet = new Set();
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        if (rowSet.has(board[i][j])) return false;
        rowSet.add(board[i][j]);
      }

      if (board[j][i] !== ".") {
        if (colSet.has(board[j][i])) return false;
        colSet.add(board[j][i]);
      }

      let boxEl =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (boxEl !== ".") {
        if (boxSet.has(boxEl)) return false;
        boxSet.add(boxEl);
      }
    }
  }

  return true;
};
