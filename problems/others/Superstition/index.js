function getActualFloor(numbers, floor) {
  let currFloor = floor;
  for (let i = 1; i <= floor; i++) {
    for (let number of numbers) {
      if (isDigitPresent(i, number)) {
        currFloor--;
      }
    }
  }

  return currFloor;
}

function isDigitPresent(x, divisor) {
  while (x > 0) {
    if (x % 10 == divisor) break;

    x = x / 10;
  }

  return x > 0;
}

let numbers1 = [4, 13];
let floor1 = 6;

let numbers2 = [2];
let floor2 = 13;

console.log(getActualFloor(numbers2, floor2));
