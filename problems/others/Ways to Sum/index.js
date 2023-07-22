// Javascript Program to find number of ways to
// which numbers that are greater than
// given number can be added to get sum.

// Return number of ways to which numbers
// that are greater than given number can
// be added to get sum.
function numberofways(n, m) {
  let dp = Array(n + 2);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(n + 2).fill(0);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = n; j >= m; j--) {
      if (i < j) dp[i][j] = 0;
      else if (i === j) dp[i][j] = 1;
      else dp[i][j] = dp[i][j + 1] + dp[i - j][j];
    }
  }

  return dp[n][m];
}

let n = 3;
let m = 1;
console.log(numberofways(n, m));
