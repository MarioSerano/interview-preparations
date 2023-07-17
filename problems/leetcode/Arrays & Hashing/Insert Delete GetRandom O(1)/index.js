var RandomizedSet = function () {
  this.obj = {};
  this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (typeof this.obj[val] === "undefined") {
    this.obj[val] = this.list.length;
    this.list.push(val);
    return true;
  }
  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */

RandomizedSet.prototype.remove = function (val) {
  if (this.list.length < 2) {
    if (typeof this.obj[val] === "undefined") return false;

    delete this.obj[val];
    this.list.pop();
    return true;
  }

  let idx = this.obj[val];
  if (typeof idx === "undefined") return false;

  this.obj[this.list[this.list.length - 1]] = idx;
  swap(this.list, idx, this.list.length - 1);

  this.list.pop();
  delete this.obj[val];

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.list[Math.floor(Math.random() * this.list.length)];
};

var swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
