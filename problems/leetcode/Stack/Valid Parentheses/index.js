/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = new Stack();
  let openParethesesSet = new Set(["(", "[", "{"]);
  let closedParenthesesObj = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  for (let l of s) {
    if (stack.isEmpty()) {
      stack.push(l);
      continue;
    }

    if (openParethesesSet.has(l)) {
      stack.push(l);
    } else if (stack.pop() !== closedParenthesesObj[l]) {
      return false;
    }
  }

  return stack.isEmpty();
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

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
