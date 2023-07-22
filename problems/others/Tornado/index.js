function generateTornado(w, h) {
  let tornado = Array(h);
  for (let i = 0; i < tornado.length; i++) {
    tornado[i] = Array(w);
  }

  // [bottom, right] => bottom = 1, go bottom
  let traversal = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let tIndex = 0;
  let hDeadEnd = h,
    wDeadEnd = w + 1;
  let i = 0,
    j = -1;
  let count = 1;
  while (wDeadEnd > 0 && hDeadEnd > 0) {
    let [bottom, right] = traversal[tIndex];
    if (right === 1) {
      let a = --wDeadEnd;
      while (a > 0) {
        tornado[i][++j] = count;
        a--;
      }
    } else if (bottom === 1) {
      let a = --hDeadEnd;
      while (a > 0) {
        tornado[++i][j] = count;
        a--;
      }
    } else if (right === -1) {
      let a = --wDeadEnd;
      while (a > 0) {
        tornado[i][--j] = count;
        a--;
      }
    } else if (bottom === -1) {
      let a = --hDeadEnd;
      while (a > 0) {
        tornado[--i][j] = count;
        a--;
      }
    }
    count++;
    tIndex = (tIndex + 1) % 4;
  }

  return tornado;
}

console.log(generateTornado(4, 4));
