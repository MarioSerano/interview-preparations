var MinStack = function () {
  this.items = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.items.push(val);
  if (this.min.length === 0 || this.min[this.min.length - 1] >= val)
    this.min.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popped = this.items.pop();
  if (this.min[this.min.length - 1] === popped) this.min.pop();
  return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
