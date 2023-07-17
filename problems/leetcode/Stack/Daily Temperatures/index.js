/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = new Stack();
  let ans = Array(temperatures.length).fill(0);

  for (let idx in temperatures) {
    let temperature = temperatures[idx];
    if (stack.isEmpty()) {
      stack.push({ temperature, idx });
      continue;
    }

    while (stack.peek()?.["temperature"] < temperature) {
      let currStackIdx = stack.pop()["idx"];
      ans[currStackIdx] = parseInt(idx) - parseInt(currStackIdx);
    }

    stack.push({ temperature, idx });
  }

  return ans;
};

// source: geeksforgeeks.org
class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  // push function
  push(element) {
    // push element into the items
    this.items.push(element);
  }

  // pop function
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }

  // peek function
  peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }

  // isEmpty function
  isEmpty() {
    // return true if stack is empty
    return this.items.length == 0;
  }

  // printStack function
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}

let temperatures = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
console.log(dailyTemperatures(temperatures));
