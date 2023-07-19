/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  // MS: [position, speed]
  let posSpeed = position.map((_, idx) => [position[idx], speed[idx]]);
  posSpeed.sort((a, b) => b[0] - a[0]);

  let stack = [];
  for (let i = 0; i < posSpeed.length; i++) {
    stack.push((target - posSpeed[i][0]) / posSpeed[i][1]);
    if (
      stack.length > 1 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
};

let target = 12;
let position = [10, 8, 0, 5, 3];
let speed = [2, 4, 1, 1, 3];
console.log(carFleet(target, position, speed));
